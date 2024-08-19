import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface SessionState {
  token: string;
  refreshToken: string;
  expiry: number;
  remember: boolean;
  initRefresh?: boolean;
  user?: { id: string; name: string; email: string };
  logout?: boolean;
}

const initialState: SessionState = {
  token: '',
  refreshToken: '',
  expiry: 0,
  remember: false,
  initRefresh: false,
  user: { id: '', name: '', email: '' },
  logout: false
};

export const session = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState>) => {
      return { ...state, ...action.payload };
    },
    clearSession: () => {
      return { ...initialState };
    },
    setRefresh: (state) => {
      state.initRefresh = true;
    },
    clearRefresh: (state) => {
      state.initRefresh = false;
    },
    dummyDispatch: (state) => {
      console.log('coming here');
    },
    logout: (state, action: PayloadAction<boolean>) => {
      return { ...state, logout: action.payload };
    },
  },
});

export const {
  setSession,
  clearSession,
  setRefresh,
  clearRefresh,
  dummyDispatch,
  logout
} = session.actions;
export const sessionReducer = session.reducer;
