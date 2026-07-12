import { useEffect, useState } from 'react';
import { api } from './api.js';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';

export default function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(null); // null = checking

  useEffect(() => {
    api('/api/admin/me')
      .then(({ loggedIn }) => setLoggedIn(loggedIn))
      .catch(() => setLoggedIn(false));
  }, []);

  if (loggedIn === null) return null;

  return (
    <div className="admin-page">
      {loggedIn
        ? <AdminDashboard onLogout={() => setLoggedIn(false)} />
        : <AdminLogin onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}
