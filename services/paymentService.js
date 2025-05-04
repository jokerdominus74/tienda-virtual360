const stripe = require('stripe')(require('../config/stripeConfig').secretKey);

const createPaymentIntentService = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error('Error creando el PaymentIntent: ' + error.message);
  }
};

module.exports = { createPaymentIntentService };
