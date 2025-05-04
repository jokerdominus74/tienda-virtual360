const stripe = require('../config/stripe')

const createCheckoutSession = async (req, res) => {
  try {
    const { products } = req.body

    const line_items = products.map(p => ({
      price_data: {
        currency: 'usd',
        product_data: { name: p.title },
        unit_amount: p.price * 100,
      },
      quantity: 1,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    })

    res.json({ url: session.url })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear sesión de pago' })
  }
}

module.exports = { createCheckoutSession }
