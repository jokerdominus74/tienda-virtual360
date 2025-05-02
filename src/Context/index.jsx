import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Estado del carrito
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  // Estado de órdenes (persistente)
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem('orders')) || [];
  });

  // Estado de productos y filtros
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState('');
  const [searchByCategory, setSearchByCategory] = useState('');

  // 🔹 NUEVO: Filtros por precio
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Diccionario de traducción de categorías
  const categoryTranslations = {
    'Clothes': 'Ropa',
    'Electronics': 'Electrónica',
    'Furniture': 'Muebles',
    'Shoes': 'Zapatos',
    'Others': 'Otros',
    'Toys': 'Juguetes',
  };

  // Obtener productos de la API
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const translatedData = data.map(item => ({
          ...item,
          category: item.category
            ? { ...item.category, name: categoryTranslations[item.category.name] || item.category.name }
            : { name: 'Sin categoría' },
        }));
        setItems(translatedData);
        setFilteredItems(translatedData);
      })
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);

  // Abrir/Cerrar detalles de producto
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Abrir/Cerrar carrito
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Agregar productos al carrito
  const addToCart = (product) => {
    const updatedCart = [...cartProducts, product];
    setCartProducts(updatedCart);
    setCount(updatedCart.length);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // 🔹 Guardar carrito en localStorage
    openCheckoutSideMenu(); 
  };

  // Eliminar productos del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(updatedCart);
    setCount(updatedCart.length);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // 🔹 Guardar carrito actualizado
  };

  // Agregar una orden (Checkout)
  const addOrder = () => {
    if (cartProducts.length === 0) return;

    const newOrder = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString(),
      totalProducts: cartProducts.length,
      totalPrice: cartProducts.reduce((acc, product) => acc + product.price, 0),
      products: JSON.parse(JSON.stringify(cartProducts)),
    };

    const updatedOrders = [...order, newOrder];
    setOrder(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setCartProducts([]);
    setCount(0);
    localStorage.setItem('cart', JSON.stringify([]));
    closeCheckoutSideMenu();
  };

  // 🔍 Filtrar productos por título, categoría y precio
  useEffect(() => {
    let filtered = items;

    if (searchByCategory) {
      filtered = filtered.filter(item =>
        item.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase())
      );
    }

    if (searchByTitle) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (minPrice !== '') {
      filtered = filtered.filter(item => item.price >= parseFloat(minPrice));
    }

    if (maxPrice !== '') {
      filtered = filtered.filter(item => item.price <= parseFloat(maxPrice));
    }

    setFilteredItems(filtered);
  }, [items, searchByTitle, searchByCategory, minPrice, maxPrice]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        addOrder,
        order,
        setOrder,
        items,
        filteredItems,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
