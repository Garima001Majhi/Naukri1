import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import your custom CSS file

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message on new attempt

    // Here you would normally send the email and password to the backend
    try {
      // Simulate an API call to check the credentials
      const response = await fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send the credentials to the backend
      });

      const data = await response.json();

      if (response.ok) {
        // Assume the response includes a token and user details
        localStorage.setItem('authToken', data.token);  // Save the token securely
        localStorage.setItem('user', JSON.stringify(data.user));  // Save user data (e.g., email)

        // Redirect to the home/dashboard page
        navigate('/');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle signup navigation
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
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
    </div>
  );
};

export default Login;
