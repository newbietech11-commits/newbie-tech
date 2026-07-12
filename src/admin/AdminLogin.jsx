import { useState } from 'react';
import { api } from './api.js';

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
      setPassword('');
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div id="login-screen" className="wrap">
      <h1>Admin Login</h1>
      <p className="sub">Enter the admin password to manage Work entries and contact info.</p>
      <form className="card" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoFocus
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
