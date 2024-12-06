import { createSlice } from '@reduxjs/toolkit';

// Initial state for user (you can enhance with more fields if needed)
const initialState = {
  user: null, // User data will be stored here
  isAuthenticated: false, // Track if user is logged in
  loading: false, // Track loading state for async operations like login/signup
  error: null, // Track any error during login/signup
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
