import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/variables.css';
import './styles/animations.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/marquee.css';
import './styles/sections.css';
import './styles/services.css';
import './styles/team.css';
import './styles/work.css';
import './styles/products.css';
import './styles/tools.css';
import './styles/experience.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/admin.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
