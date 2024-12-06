import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import your Redux store
import App from './App'; // Main App component
import './index.css'; // Import global styles

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Providing Redux store to the app */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
