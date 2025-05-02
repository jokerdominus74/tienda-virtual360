import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const fetchFilteredProducts = async () => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    let apiUrl = 'https://api.escuelajs.co/api/v1/products';

    // Si hay una categoría, la usamos para buscar por categoría
    if (category) {
      try {
        const categoryRes = await fetch('https://api.escuelajs.co/api/v1/categories');
        const categories = await categoryRes.json();
        const matched = categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());
        
        if (matched) {
          apiUrl = `https://api.escuelajs.co/api/v1/categories/${matched.id}/products`;
        }
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    }

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      // Simulamos filtrado adicional por color, talla, etc.
      const filtered = data.filter(product => {
        const color = params.get('color');
        const size = params.get('size');
        const rating = params.get('rating');

        const matchesColor = color ? product.title.toLowerCase().includes(color.toLowerCase()) : true;
        const matchesSize = size ? product.description.toLowerCase().includes(size.toLowerCase()) : true;
        const matchesRating = rating ? Math.round(product.rating || 0) >= parseInt(rating) : true;

        return matchesColor && matchesSize && matchesRating;
      });

      setProducts(filtered);
    } catch (err) {
      console.error('Error al obtener productos:', err);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [location.search]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Productos Filtrados 🛍️</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No se encontraron productos con los filtros seleccionados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
