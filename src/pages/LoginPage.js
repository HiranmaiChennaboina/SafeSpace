import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'HR') {
      navigate('/hr-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>University at Buffalo SafeSpace Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="radio"
            value="User"
            checked={role === 'User'}
            onChange={() => setRole('User')}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            value="HR"
            checked={role === 'HR'}
            onChange={() => setRole('HR')}
          />
          HR
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
