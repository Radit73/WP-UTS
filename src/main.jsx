import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/utilities.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
