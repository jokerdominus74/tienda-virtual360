// src/Components/PaymentWrapper.jsx
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXX");

const PaymentWrapper = ({ amount, onClose }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={amount} onClose={onClose} />
  </Elements>
);

export default PaymentWrapper;
