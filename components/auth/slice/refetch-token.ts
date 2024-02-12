import { graphql_api } from '@/api/graphql-api-base';
import { store } from '@/redux/store';
import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
import { clearSession, setSession } from './session-slice';

export const refetchToken: Middleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action) && action.payload.statusCode === 401) {
    const currentToken = api.getState().session.token;

    if (currentToken) {
      store.dispatch(clearSession());
      const trigger = (graphql_api.endpoints as any).RefreshToken.initiate({
        accessToken: currentToken,
      });
      trigger(api.dispatch, api.getState, {}).then((res: any) => {
        console.log('response of trigger', res);
        if ('data' in res) {
          console.log('User Token Refreshed');
          store.dispatch(
            setSession({
              token: res.data.refreshToken.accessToken,
              expiry: 0,
              remember: false,
            })
          );
        }
        if ('error' in res && 'statusCode' in res.error) {
          if (res.error.statusCode === 401) {
            store.dispatch(clearSession());
            store.dispatch(graphql_api.util.resetApiState());
            console.log('User Token Expired, User Logged Out');
          }
        }
      });
    }
    return next(action);
  }
  return next(action);
};
