import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Cargar la clave pública de Stripe
const stripePromise = loadStripe("tu_clave_publica");

function PaymentForm() {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return; // Asegúrate de que Stripe está cargado

    const cardElement = elements.getElement(CardElement);

    setProcessing(true);

    try {
      // Llamar al backend para crear un PaymentIntent
      const res = await fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5000 }), // Monto en centavos
      });
      const { clientSecret } = await res.json();

      // Confirmar el pago con el clientSecret
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setError(error.message);
      } else {
        if (paymentIntent.status === "succeeded") {
          console.log("Pago exitoso!");
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={processing || !stripe}>
        {processing ? "Procesando..." : "Pagar"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}

export function PaymentWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
