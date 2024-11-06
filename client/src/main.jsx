import React from 'react';
import ReactDOM from 'react-dom/client'; // Vite uses `react-dom/client`
import App from './App';
import './i18n';
import './index.css'; // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
