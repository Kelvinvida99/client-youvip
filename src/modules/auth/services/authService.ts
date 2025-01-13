import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getEnvVariables } from "../../../shared/utils";
import {
  CredentialProps,
  RegisterProps,
  RegisterResponse,
  UserProps,
} from "../types";

const { VITE_API_URL } = getEnvVariables();

export const authApi = createApi({
  reducerPath: "auth",

  baseQuery: fetchBaseQuery({
    baseUrl: VITE_API_URL,
  }),

  endpoints: (builder) => ({
    // Login
    login: builder.mutation<UserProps, CredentialProps>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Register
    register: builder.mutation<RegisterResponse, RegisterProps>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
