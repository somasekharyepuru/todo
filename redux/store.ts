import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { storeAccessTokenToLocalStorage } from './middleware';
import { graphql_api } from '../api/graphql-api-base';
import { slideMenuReducer } from '@/components';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { refetchToken, sessionReducer } from '@/components/auth';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};
const rootReducer = combineReducers({
  sideMenu: slideMenuReducer,
  session: sessionReducer,
  [graphql_api.reducerPath]: graphql_api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(storeAccessTokenToLocalStorage.middleware, refetchToken)
      .concat(graphql_api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
