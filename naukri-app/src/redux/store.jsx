// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';  // Correct import of the authSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer,  // Add the authSlice reducer to the store
  },
});

export default store;
