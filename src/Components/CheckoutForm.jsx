import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './CheckoutForm.css'; // asegúrate de tener estilos aquí

const CheckoutForm = ({ amount, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        setTimeout(() => {
          onClose?.(); // cerrar panel
        }, 2500);
      }
    } catch (error) {
      console.error('Error al pagar:', error);
      setMessage('❌ Error al procesar el pago');
    }

    setLoading(false);
  };

  return (
    <div className="checkout-overlay">
      {loading || success ? (
        <motion.div
          className="checkout-animation"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src="https://cdn.dribbble.com/users/2067343/screenshots/6012641/payment_success.gif"
            alt="Processing"
            className="checkout-image"
          />
          {message && <p className="checkout-message text-white">{message}</p>}
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form-glass">
          <h3 className="text-cyan-300 text-xl mb-4">💳 Información de pago</h3>
          <div className="card-element-wrapper">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#e2e8f0',
                    '::placeholder': { color: '#a0aec0' },
                  },
                  invalid: { color: '#fa755a' },
                },
              }}
            />
          </div>
          <button type="submit" disabled={!stripe || loading} className="checkout-btn-glass">
            {loading ? 'Procesando...' : `Pagar $${amount}`}
          </button>
          {message && <p className="checkout-message">{message}</p>}
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
