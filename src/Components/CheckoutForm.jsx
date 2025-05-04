// src/components/CheckoutForm.jsx
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';
import './CheckoutForm.css'; // estilos opcionales

const CheckoutForm = ({ amount, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage('');

    try {
      const { data } = await axios.post('http://localhost:5000/create-payment-intent', {
        amount: amount * 100
      });

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('✅ ¡Pago realizado con éxito!');
        setTimeout(() => {
          onClose?.(); // cerrar modal o panel si fue exitoso
        }, 2000);
      }
    } catch (error) {
      console.error('Error al pagar:', error);
      setMessage('❌ Error al procesar el pago');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3>Información de pago</h3>
      <div className="card-element-wrapper">
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#32325d',
              '::placeholder': { color: '#a0aec0' },
            },
            invalid: { color: '#fa755a' }
          }
        }} />
      </div>
      <button type="submit" disabled={!stripe || loading} className="checkout-btn">
        {loading ? 'Procesando...' : `Pagar $${amount}`}
      </button>
      {message && <p className="checkout-message">{message}</p>}
    </form>
  );
};

export default CheckoutForm;
