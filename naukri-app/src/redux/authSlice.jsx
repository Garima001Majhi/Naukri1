// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  token: null,  // Authentication token (could be JWT)
  user: null,   // User data (e.g., username, email)
};

// Create the authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set user and token after login
    setLogin: (state, action) => {
      state.token = action.payload.token;  // Store the token
      state.user = action.payload.user;    // Store the user object
    },
    // Action to set user information
    setUser: (state, action) => {
      state.user = action.payload;  // Update user information
    },
    // Action to handle logout
    logout: (state) => {
      state.token = null;  // Clear token on logout
      state.user = null;   // Clear user data on logout
    },
  },
});

// Export actions for use in components
export const { setLogin, setUser, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
