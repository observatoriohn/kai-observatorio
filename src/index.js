import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'; // Puedes quitar esto si no usas Tailwind u otro CSS
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
