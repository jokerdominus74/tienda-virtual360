const handleCheckout = async () => {
    const items = context.cartProducts.map(product => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
        },
        unit_amount: product.price * 100, // convertir a centavos
      },
      quantity: 1,
    }));
  
    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items })
      });
  
      const data = await response.json();
  
      // Redirige a la pasarela de Stripe
      window.location.href = data.url;
  
    } catch (error) {
      console.error("Error al iniciar sesión de pago:", error);
    }
  };
  