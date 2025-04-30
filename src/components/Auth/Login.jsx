import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/auth.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!phone.match(/^\d{10}$/)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    // Mock authentication (replace with real API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Dummy credentials check
      if (phone === '1234567890' && password === 'password123') {
        localStorage.setItem('authToken', 'dummy_token');
        navigate('/');
      } else {
        setError('Invalid phone number or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your account</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input">
              <span className="country-code">+1</span>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="1234567890"
                maxLength="10"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="options-row">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <a href="#signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;