import React, { useState } from 'react';
import './Filtro.css';
import FilterSidePanel from './FilterSidePanel';

const Filtro = ({ onFiltrar }) => {
  const [categoria, setCategoria] = useState('Todas');
  const [talla, setTalla] = useState('Todas');
  const [precio, setPrecio] = useState(1000);
  const [isOpen, setIsOpen] = useState(false);

  const manejarFiltro = () => {
    onFiltrar({ categoria, talla, precio });
  };

  return (
    <div className="filtro-panel">
      <h3>🔍 Filtros</h3>

      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white p-2 rounded">Abrir Filtros Avanzados</button>
      <FilterSidePanel isOpen={isOpen} onClose={() => setIsOpen(false)} onApplyFilters={onFiltrar} />

      <label>Categoría</label>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Muebles">Muebles</option>
        <option value="Juguetes">Juguetes</option>
        <option value="Ropa">Ropa</option>
        <option value="Otros">Otros</option>
      </select>

      <label>Talla</label>
      <select value={talla} onChange={(e) => setTalla(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      <label>Precio máximo: ${precio}</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <button onClick={manejarFiltro} className="bg-green-500 text-white p-2 rounded">Aplicar Filtros</button>
    </div>
  );
};

export default Filtro;
