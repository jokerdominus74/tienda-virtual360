const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
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
})

module.exports = router
