import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const ShoppingCartContext = createContext();

// Hook personalizado para usar el contexto
export const useShoppingCart = () => useContext(ShoppingCartContext);

// Proveedor del contexto
export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCartProducts((prev) => [...prev, product]);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <ShoppingCartContext.Provider value={{
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
