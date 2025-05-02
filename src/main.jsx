import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import './index.css';
import { AuthProvider } from "./Context/AuthContext";
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* 🔹 Envuelve la aplicación con el contexto */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);