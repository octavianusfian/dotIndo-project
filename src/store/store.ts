// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
// import your reducers here, contoh: import counterReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    authState: authReducer,
  },
});

// Type-safe hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
