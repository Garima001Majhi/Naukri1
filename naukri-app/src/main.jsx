// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Provider to pass the Redux store down
import store from './redux/store';       // Import your Redux store
import App from './App';                 // Main App component
import './index.css';                    // Global styles

// Render the application with Redux Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Provide the Redux store to the entire app */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
