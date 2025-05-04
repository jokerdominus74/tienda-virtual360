import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  // Usa la clave secreta desde las variables de entorno

export const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;  // El monto es pasado desde el cuerpo de la solicitud (en centavos)

    // Crear un PaymentIntent con Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,  // Monto en centavos
      currency: 'usd',  // Puedes cambiar la moneda si es necesario
    });

    // Enviar el client_secret al frontend para completar el pago
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('❌ Error al crear PaymentIntent:', error);
    res.status(500).send({ error: 'Error en el servidor' });
  }
};
