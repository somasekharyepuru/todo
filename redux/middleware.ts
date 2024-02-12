import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

export const storeAccessTokenToLocalStorage = createListenerMiddleware();
