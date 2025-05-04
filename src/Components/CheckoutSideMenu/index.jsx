import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';
import CheckoutForm from '../../Components/CheckoutForm'; // Asegúrate de importar el CheckoutForm
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]); // Vaciar el carrito
    context.setSearchByTitle(null); // Opcional, si deseas limpiar el filtro
    setShowCheckout(true); // Mostrar el formulario de pago
  };

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <button
          className='w-full bg-blue-700 py-3 text-white w-full rounded-lg'
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>

      {showCheckout && (
        <CheckoutForm amount={totalPrice(context.cartProducts)} onClose={() => setShowCheckout(false)} />
      )}
    </aside>
  );
};

export default CheckoutSideMenu;
