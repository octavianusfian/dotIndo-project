import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Tipe user
interface User {
  id: string;
  name: string;
  email: string;
}

// State auth
interface AuthState {
  user: User | null;
}

// Cek localStorage dulu
const userFromStorage = localStorage.getItem("user");
const initialState: AuthState = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // <-- HAPUS dari localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
