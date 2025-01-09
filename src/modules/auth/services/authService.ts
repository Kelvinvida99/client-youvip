import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getEnvVariables } from "../../../shared/utils";

const { VITE_API_URL } = getEnvVariables();

// Tipos para el usuario y credenciales
interface UserProps {
  id: string;
  email: string;
  token: string;
}

interface CredentialProps {
  email: string;
  password: string;
}

// Tipos para los datos de registro (puedes extender según lo que requiera tu API)
interface RegisterProps {
  email: string;
  password: string;
  name?: string; // Si tu API espera un nombre u otros campos opcionales
}

// Tipos para la respuesta del registro
interface RegisterResponse {
  id: string;
  email: string;
  token: string;
}

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
        body: credentials, // Correo y contraseña
      }),
    }),

    // Register
    register: builder.mutation<RegisterResponse, RegisterProps>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData, // Datos del usuario
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
