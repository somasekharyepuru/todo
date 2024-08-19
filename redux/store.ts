import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { storeAccessTokenToLocalStorage } from './middleware';
import { slideMenuReducer } from '@/components';
import { sessionReducer } from '@/components/auth';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { graphql_api } from '../api/graphql-api-base';
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
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(storeAccessTokenToLocalStorage.middleware)
      .concat(graphql_api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
