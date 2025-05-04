// src/Components/CheckoutButton.jsx
import axios from "axios";

const CheckoutButton = ({ products }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/create-checkout-session", {
        products, // Enviamos lista de productos
      });

      window.location.href = response.data.url;
    } catch (error) {
      console.error("❌ Error al crear la sesión de pago", error);
      alert("Error iniciando el pago");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        padding: "12px 24px",
        backgroundColor: "#0abde3",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Pagar con Stripe
    </button>
  );
};

export default CheckoutButton;
