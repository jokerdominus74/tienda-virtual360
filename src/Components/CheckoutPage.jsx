import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutPage = () => {
  const { cartProducts, setCartProducts, order, setOrder } = useContext(ShoppingCartContext)
  const [coupon, setCoupon] = useState('')
  const [isAgreed, setIsAgreed] = useState(false)
  const [discount, setDiscount] = useState(0)

  const handleCoupon = () => {
    if (coupon === 'FUTURE10') {
      setDiscount(0.10)
    } else {
      setDiscount(0)
    }
  }

  const handleCheckout = async () => {
    if (!isAgreed) return
    const finalPrice = totalPrice(cartProducts) * (1 - discount)

    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: finalPrice.toFixed(2)
    }

    setOrder([...order, orderToAdd])
    setCartProducts([])

    // Aquí harías una llamada al backend con tu API para Stripe
    // await fetch('/api/create-checkout-session', { method: 'POST', body: JSON.stringify(orderToAdd) })
  }

  const total = totalPrice(cartProducts)
  const finalTotal = (total * (1 - discount)).toFixed(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8 font-sans">
      <div className="max-w-3xl mx-auto shadow-2xl rounded-xl bg-gray-800/90 p-8 backdrop-blur-md">
        <h1 className="text-3xl mb-6 font-bold tracking-wide neon-text">Resumen de tu pedido</h1>

        {cartProducts.map(p => (
          <div key={p.id} className="flex justify-between border-b border-gray-700 py-2">
            <span>{p.title}</span>
            <span>${p.price}</span>
          </div>
        ))}

        <div className="mt-4 flex justify-between text-xl font-semibold">
          <span>Total:</span>
          <span>${total}</span>
        </div>

        {discount > 0 && (
          <div className="text-green-400 text-right text-sm">Cupón aplicado: -{discount * 100}%</div>
        )}

        <input
          type="text"
          placeholder="Cupón de descuento"
          value={coupon}
          onChange={e => setCoupon(e.target.value)}
          className="mt-4 w-full bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
        />
        <button onClick={handleCoupon} className="mt-2 text-sm text-cyan-400 hover:text-cyan-200 transition-all">Aplicar cupón</button>

        <div className="mt-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)} />
            <span className="text-sm text-gray-300">Soy mayor de 18 años y acepto los <a href="#" className="underline text-blue-400">términos y condiciones</a>.</span>
          </label>
        </div>

        <button
          className={`mt-6 w-full py-3 rounded-xl transition-all font-bold text-lg ${
            isAgreed ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-gray-600 cursor-not-allowed'
          }`}
          onClick={handleCheckout}
          disabled={!isAgreed}
        >
          Proceder a pagar ${finalTotal}
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
