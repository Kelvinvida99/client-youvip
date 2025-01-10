import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../modules/auth/services/authService';
import { authSlice } from '../modules/auth/authSlice';


export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;