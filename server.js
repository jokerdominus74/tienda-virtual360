// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import Stripe from 'stripe';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Configurar Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Conectar a MongoDB
const mongoUri = process.env.MONGO_URI;
console.log('🔑 STRIPE SECRET KEY:', process.env.STRIPE_SECRET_KEY);
console.log('🔓 STRIPE PUBLIC KEY:', process.env.STRIPE_PUBLIC_KEY);
console.log('🌐 MONGO URI:', mongoUri);

mongoose.connect(mongoUri)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// ✅ Ruta de prueba
app.get('/ping', (req, res) => {
  res.send('✅ Backend funcionando');
});

// ✅ Crear Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true }
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('❌ Error al crear PaymentIntent:', err);
    res.status(500).send({ error: 'Falló el intento de pago' });
  }
});

// ✅ Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor activo en http://localhost:${PORT}`));
