import React, { useEffect, useState } from 'react';
import "./LoginEmulator.css"
import { useNavigate } from 'react-router-dom'


export default function LoginEmulator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle login logic here
    console.log(`Email: ${email}, Password: ${password}`);

    if (email === 'test@email.com' && password === 'password') {
      navigate('/cast-and-crew');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
      <div className="logo-container">
          {/* Replace src with your logo URL */}
          <img src="/Purple_JU_Logo.png" alt="Company Logo" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};