import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrors({
        username: username.trim() ? '' : 'Username is required.',
        password: password.trim() ? '' : 'Password is required.'
      });
    } else {
      console.log('Submitted:', { username, password });
      setUsername('');
      setPassword('');
      setErrors({ username: '', password: '' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> 
      </div>
    </div>
  );
};

export default LoginForm;
