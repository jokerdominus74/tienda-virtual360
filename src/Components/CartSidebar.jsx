import { useState } from 'react';
import CheckoutForm from './CheckoutForm'; // importa el formulario

const CartSidebar = ({ total }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="sidebar">
      <div className="cart-summary">
        <p>Total: ${total}</p>
        <button className="checkout-btn" onClick={() => setShowCheckout(true)}>
          Checkout
        </button>
      </div>

      {showCheckout && (
        <CheckoutForm amount={total} onClose={() => setShowCheckout(false)} />
      )}
    </div>
  );
};

export default CartSidebar;
