import { useContext, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';
import CheckoutForm from '../../Components/CheckoutForm';
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
    context.setCartProducts([]);
    context.setSearchByTitle(null);
    setShowCheckout(true);
  };

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 top-0 h-full w-96 shadow-xl border-l border-[#48c7f0] bg-gradient-to-br from-[#1f174a] to-[#3b298c] z-50 rounded-l-xl text-white transition-all duration-300`}
    >
      <div className='flex justify-between items-center p-6 border-b border-[#3caee3]'>
        <h2 className='font-semibold text-2xl tracking-wide text-cyan-300'>🛒 My Order</h2>
        <XMarkIcon
          className='h-6 w-6 text-cyan-400 hover:text-red-400 transition duration-200 cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>

      <div className='px-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-cyan-300/40'>
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

      <div className='px-6 mb-6 mt-4'>
        <p className='flex justify-between items-center mb-4 text-lg text-white/80'>
          <span>Total:</span>
          <span className='font-bold text-3xl text-cyan-300'>${totalPrice(context.cartProducts)}</span>
        </p>

        <button
          className='w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 active:scale-95 transition transform py-3 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30'
          onClick={handleCheckout}
        >
          💳 Checkout Now
        </button>
      </div>

      {showCheckout && (
        <CheckoutForm amount={totalPrice(context.cartProducts)} onClose={() => setShowCheckout(false)} />
      )}
    </aside>
  );
};

export default CheckoutSideMenu;
