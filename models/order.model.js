
// server/models/order.model.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      title: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  stripeSessionId: { type: String, required: true },
  customerEmail: { type: String }, // si capturas el correo del cliente
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
