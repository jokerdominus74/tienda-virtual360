import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(context.order));
  }, [context.order]);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Mis Órdenes</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              products={order.products} // 🔹 Ahora pasamos los productos
            />
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders;
