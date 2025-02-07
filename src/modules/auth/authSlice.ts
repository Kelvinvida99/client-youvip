import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: "authenticated", // 'authenticated','not-authenticated',
  user: {},
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.authStatus = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.authStatus = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onRegister: (state, { payload }) => {
      state.authStatus = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state) => {
      state.authStatus = "not-authenticated";
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onRegister, onLogout } = authSlice.actions;
