import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "dhaarmi" && password === "dHAARMI@60055") {
        state.isAuthenticated = true;
        state.user = { username };
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify({ username }));
      } else {
        alert("Invalid Username or Password");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
