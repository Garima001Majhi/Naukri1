// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  token: null,
  user: null,
};

// Create the authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set user and token after login
    setLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    // Action to set user information
    setUser: (state, action) => {
      state.user = action.payload; // Set user object in state
    },
    // Action to handle logout
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

// Export actions for use in components
export const { setLogin, setUser, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
