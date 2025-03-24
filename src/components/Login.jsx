import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock, FaSignInAlt } from 'react-icons/fa';

import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
     
      if (!credentials.email || !credentials.password) {
        throw new Error('Please fill in all fields');
      }
  
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
     
      const user = storedUsers.find(
        u => u.email === credentials.email && u.password === credentials.password
      );
  
      if (!user) {
        throw new Error('Invalid email or password');
      }
  
      
      onLogin({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role || 'patient'
      });
  
    
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <FaUserShield className="login-icon" />
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to access your account</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <FaUserShield className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                minLength="6"
              />
            </div>
          </div>

          <div className="remember-forgot">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              'Logging in...'
            ) : (
              <>
                <FaSignInAlt className="button-icon" />
                Login
              </>
            )}
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <button onClick={() => navigate('/')}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;