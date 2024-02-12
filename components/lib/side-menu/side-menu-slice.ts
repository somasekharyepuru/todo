import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ISideMenuSliceState {
  selected: string;
  isCollapsed: boolean;
  openKeys?: string[];
}

const initialState: ISideMenuSliceState = {
  selected: 'dashboard',
  isCollapsed: false,
  openKeys: [],
};

const sideMenuSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsCollapsed(state, action: PayloadAction<boolean>) {
      state.isCollapsed = action.payload;
    },
    setSelectedMenu(state, action: PayloadAction<string>) {
      state.selected = action?.payload;
    },
    toggleCollapsed(state) {
      state.isCollapsed = !state.isCollapsed;
    },
    setOpenKeys(state, action: PayloadAction<string[] | undefined>) {
      state.openKeys = action.payload;
    },
  },
});

export const { setIsCollapsed, setSelectedMenu, toggleCollapsed, setOpenKeys } =
  sideMenuSlice.actions;
export const slideMenuReducer = sideMenuSlice.reducer;
