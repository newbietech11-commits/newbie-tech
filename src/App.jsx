import { Routes, Route } from 'react-router-dom';
import MainSite from './pages/MainSite.jsx';
import AdminApp from './admin/AdminApp.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainSite />} />
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  );
}
