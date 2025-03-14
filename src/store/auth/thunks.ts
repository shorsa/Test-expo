import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions as appActions } from "../app/slice";
import { ApiEndpoints } from "@constants/apiEndpoints";
import api from "@utils/axios.interceptor";

export const handleCheckUserEmailThunk = createAsyncThunk(
  "user/check-user-email",
  async (payload: { email: string; phoneNumber: string }, thunkAPI) => {
    try {
      // const response = await api.post(ApiEndpoints.CHECK_USER_EXISTS, {
      //   email: payload.email,
      // });
      // if (response.status === 200) {
      // return response.data;
      return {
        userExists: false,
        // };
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const handleCheckUserOnboardingThunk = createAsyncThunk(
  "user/check-user-onboarding",
  async (payload: { userId: string }, thunkAPI) => {
    try {
      // const response = await api.post(ApiEndpoints.CHECK_USER_ONBOARDING, {
      //   userId: payload.userId,
      // });

      // return response.data;

      return {
        onboardingCompleted: false,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
