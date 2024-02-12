import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { ENDPOINT } from '../utils/constants';

export const graphql_api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: ENDPOINT.GRAPHQL_API_URL,
    prepareHeaders: async (headers, { getState }) => {
      const state: any = getState();
      const token = state?.session?.token;
      if (!!token) {
        console.log('Adding token to URLs');
        headers.set('Authorization', `Bearer ${token}`);
        headers.set('apollo-require-preflight', 'true');
      }

      return headers;
    },
    customErrors: ({ name, stack, response }) => {
      const errorMessage = response?.errors?.length
        ? response?.errors[0].message
        : '';
      const code: string = response?.errors?.length
        ? (response?.errors[0]?.extensions?.code as string)
        : '';
      const statusCode: number = response?.errors?.length
        ? (response?.errors[0]?.extensions?.statusCode as number)
        : 0;
      return {
        name,
        message: errorMessage,
        code: code,
        statusCode: statusCode,
      };
    },
  }),

  endpoints: () => ({}),
  reducerPath: 'graphql',
  refetchOnMountOrArgChange: true,
});
