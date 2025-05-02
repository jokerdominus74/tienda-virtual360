// src/pages/Productos.jsx
import React, { useEffect, useState } from 'react';
import Filtro from './components/Filtro'; // Asegúrate que esta ruta sea válida
import SafeProductImage from '../../Components/Reutilizable/SafeProductImage'; // Ajusta la ruta según tu estructura

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const filtrarProductos = async (filtros) => {
    try {
      const response = await fetch('http://localhost:5000/api/productos/filtrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filtros),
      });
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('❌ Error al filtrar productos:', error);
    }
  };

  useEffect(() => {
    filtrarProductos({ categoria: 'Todas', talla: 'Todas', precio: 1000 });
  }, []);

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <Filtro onFiltrar={filtrarProductos} />
      <div style={{ marginLeft: '20px', flex: 1 }}>
        {productos.length === 0 ? (
          <p style={{ color: '#aaa' }}>No hay productos disponibles 😢</p>
        ) : (
          productos.map((prod) => (
            <div
              key={prod._id}
              style={{
                background: '#fff',
                padding: '10px',
                margin: '10px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.1)',
              }}
            >
              <SafeProductImage
                src={prod.imagen} // Usa el campo correcto según tu API
                alt={prod.nombre}
                fallback="/placeholder.png"
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <h4>{prod.nombre}</h4>
              <p>{prod.descripcion}</p>
              <p><strong>${prod.precio}</strong></p>
              <p>Talla: {prod.talla}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Productos;
