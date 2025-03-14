import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
});

export const { actions } = appSlice;

