// src/utils/totalPrice.js

/**
 * Calcula el precio total de un arreglo de productos.
 * @param {Array} products - Lista de productos (cada uno debe tener una propiedad 'price').
 * @returns {number} El precio total de todos los productos.
 */
export function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
  