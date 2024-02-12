import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface SessionState {
  token: string;
  expiry: number;
  remember: boolean;
  initRefresh?: boolean;
  user?: { id: string; name: string; email: string };
}

const initialState: SessionState = {
  token: '',
  expiry: 0,
  remember: false,
  initRefresh: false,
  user: { id: '', name: '', email: '' },
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
  },
});

export const {
  setSession,
  clearSession,
  setRefresh,
  clearRefresh,
  dummyDispatch,
} = session.actions;
export const sessionReducer = session.reducer;
