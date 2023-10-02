import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfileResponse } from "./types";
import { RootState } from "../../store";

// Define a type for the slice state
interface InitialState {
  profile: IProfileResponse;
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: InitialState = {
  profile: {
    created_at: "",
    credits: 0,
    email: "",
    id: "",
    name: "",
    updated_at: "",
  },
  isLoggedIn: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserProfile: (state, action: PayloadAction<IProfileResponse>) => {
      state.profile = action.payload;
    },

    setLoginState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { saveUserProfile, setLoginState } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserProfile = (state: RootState) => state.auth.profile;
export const selectLoginState = (state: RootState) => state.auth.isLoggedIn;

// Reducer
export const authReducer = authSlice.reducer;
