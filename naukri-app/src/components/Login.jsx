// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import your custom CSS file

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To manage login state
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // State for controlling the welcome message

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message on new attempt

    // Get the stored email and password from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored ones
    if (email === storedEmail && password === storedPassword) {
      setIsLoggedIn(true); // Set login state to true
      setShowWelcomeMessage(true); // Show welcome message
      // Wait for 3 seconds before navigating
      setTimeout(() => {
        navigate('/'); // Redirect to the home/dashboard page
      }, 3000); // 3 seconds delay
    } else {
      setError('Invalid credentials');
    }

    setLoading(false);
  };

  // Handle sign up navigation
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      {isLoggedIn && showWelcomeMessage ? (
        <div className="welcome-message">
          <h2>Welcome, {localStorage.getItem('email')}!</h2>
          <p>You're successfully logged in. Redirecting...</p>
        </div>
      ) : (
        <>
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {/* Sign Up Button */}
          <div className="signup-link">
            <p>Don't have an account?</p>
            <button onClick={handleSignup} className="signup-button">
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
