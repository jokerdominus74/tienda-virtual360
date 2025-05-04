import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import './index.css';
import { AuthProvider } from "./Context/AuthContext";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext"; // ✅ importa el contexto del carrito
import '@fortawesome/fontawesome-free/css/all.min.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Clave pública de Stripe
const stripePromise = loadStripe('pk_test_51RJlUFQ2fQ4yfkUSaZ2l4wL1AVneNypjtlcfzTCcF1GT4Sl2Hp3sm5vgHHtGnXsYjRiDcfBH5qWCWdbGCz7wNohJ00hO0aHb2v');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <AuthProvider>
        <ShoppingCartProvider> {/* ✅ envuelve la App con el carrito */}
          <App />
        </ShoppingCartProvider>
      </AuthProvider>
    </Elements>
  </React.StrictMode>
);
