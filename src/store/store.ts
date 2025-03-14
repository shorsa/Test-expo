import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app/slice";
import { authSlice } from "./auth/slice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
