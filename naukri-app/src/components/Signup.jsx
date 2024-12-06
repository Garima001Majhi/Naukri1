import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';  // Import custom CSS file

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state to show a loading indicator

  const handleSignup = async (e) => {
    e.preventDefault();

    // Form validation (basic example)
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setLoading(true);

    // Example of a POST request to your backend (replace with actual backend API)
    try {
      // Assuming you have a backend API that handles signup (e.g., using fetch or axios)
      const response = await fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful signup (store token, etc.)
        localStorage.setItem('email', email);  // Store only non-sensitive data (e.g., email)
        
        // Redirect to login page
        navigate('/login');
      } else {
        // Handle errors (e.g., email already exists, weak password)
        setError(data.message || 'Signup failed, please try again.');
      }
    } catch (error) {
      // Handle network or server errors
      setError('An error occurred, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
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
        <button type="submit" className="signup-button" disabled={loading}>
          {loading ? 'Signing Up...' : 'Signup'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;
