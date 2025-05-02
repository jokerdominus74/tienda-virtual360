import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ totalPrice, totalProducts, products }) => {
  return (
    <div className="flex flex-col border border-black rounded-lg p-4 w-80 mb-3">
      {/* Información general de la orden */}
      <div className="flex justify-between items-center mb-2">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} artículos</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>

      {/* Lista de productos en la orden */}
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3">
            <img src={product.images[0]} alt={product.title} className="w-12 h-12 rounded-md object-cover" />
            <p className="text-sm font-light">{product.title}</p>
            <span className="text-lg font-medium">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersCard;
