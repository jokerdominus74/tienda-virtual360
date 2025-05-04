// src/Pages/TestStripe.jsx

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/CheckoutForm';

const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'); // ⚠️ reemplaza con tu clave pública real

const TestStripe = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={50} /> {/* Por ejemplo: 50 dólares */}
  </Elements>
);

export default TestStripe;
