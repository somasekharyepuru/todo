import { Action, PayloadAction } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { Mutex } from 'async-mutex';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState, store } from '../redux/store';
import { ENDPOINT } from '@/utils';
import { logout, setSession } from '@/components/auth';

const mutex = new Mutex();

interface RefreshResultData {
  refreshToken: {
    accessToken: string;
    refreshToken: string;
  };
}

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

const baseQuery = graphqlRequestBaseQuery({
  url: ENDPOINT.GRAPHQL_API_URL,

  prepareHeaders: (headers, { getState }) => {
    const state: any = getState();
    const token = state?.session?.token;
    if (!!token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('apollo-require-preflight', 'true');
    }
    return headers;
  },
  customErrors: ({ name, response }) => {
    const errorMessage = response?.errors?.length
      ? response?.errors[0].message
      : 'NO ERROR MESSAGE';
    const code: string = response?.errors?.length
      ? (response?.errors[0]?.extensions?.code as string)
      : 'NO ERROR CODE';
    const statusCode: number = response?.errors?.length
      ? (response?.errors[0]?.extensions?.statusCode as number)
      : 0;
    console.error(errorMessage, code, statusCode);
    return {
      name,
      message: errorMessage,
      code: code,
      statusCode: statusCode,
    };
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.statusCode === 401) {
    const refreshToken = (api.getState() as RootState).session.refreshToken;
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      console.log('Locking MUTEX');

      try {
        // Attempt to refresh the access token
        const refreshResult = await baseQuery(
          {
            document: `
        mutation RefreshToken($refresh: String!) {
          refreshToken(refresh: $refresh) {
            accessToken
            refreshToken
          }
        }
      `,
            variables: { refresh: refreshToken },
          },
          api,
          extraOptions,
        );
        if (refreshResult.data) {
          const apiResponse = refreshResult.data as RefreshResultData;
          api.dispatch(
            setSession({
              token: apiResponse.refreshToken.accessToken,
              expiry: 0,
              remember: true,
              refreshToken: apiResponse.refreshToken.refreshToken,
            }),
          );
          result = await baseQuery(args, api, extraOptions);
          console.log('New refresh token', result);
        } else {
          store.dispatch(logout(true));
          console.info('User Token Expired, User Logged Out');
        }
      } finally {
        release();
      }
    } else {
      console.log('Wating for mutex to get unlock');
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const graphql_api = createApi({
  baseQuery: baseQueryWithReauth,
  // to prevent circular type issues, the return type needs to be annotated as any
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
  reducerPath: 'graphql',
  refetchOnMountOrArgChange: true,
});
