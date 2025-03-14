import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (
      state,
      { payload }: PayloadAction<{ userExists: boolean }>
    ) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions } = authSlice;
