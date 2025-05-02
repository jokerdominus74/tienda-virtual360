import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function FilterSidePanel({ isOpen, onClose }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [collection, setCollection] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        if (!response.ok) throw new Error('Error al obtener categorías');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('❌ Error al obtener categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleApplyFilters = () => {
    const queryParams = new URLSearchParams();

    if (selectedCategory) queryParams.append('category', selectedCategory);
    if (collection) queryParams.append('collection', collection);
    if (color) queryParams.append('color', color);
    if (size) queryParams.append('size', size);
    if (rating) queryParams.append('rating', rating);

    const queryString = queryParams.toString();
    const targetPath = `/productos${queryString ? `?${queryString}` : ''}`;

    console.log("🧐 Filtros aplicados:", Object.fromEntries(queryParams.entries()));
    navigate(targetPath);
    onClose();
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-2xl z-50 p-6 space-y-6 border-r-4 border-blue-500 rounded-r-xl"
    >
      {/* Encabezado */}
      <div className="flex justify-between items-center border-b border-blue-400 pb-4">
        <h2 className="text-xl font-extrabold tracking-widest neonText">⚡ Filtros ⚡</h2>
        <button onClick={onClose} className="text-blue-300 hover:text-cyan-400 text-2xl transition-transform hover:scale-125">
          ✖
        </button>
      </div>

      {/* Categorías */}
      <div>
        <h3 className="text-cyan-300 text-lg mb-2 font-semibold tracking-wide">Categoría</h3>
        <select
          className="w-full p-2 rounded-lg text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Colección */}
      <div>
        <h3 className="text-cyan-300 text-lg mb-2 font-semibold tracking-wide">Colección</h3>
        <select
          className="w-full p-2 rounded-lg text-black"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="UA HOVR">UA HOVR</option>
          <option value="Project Rock">Project Rock</option>
          <option value="UA Charged">UA Charged</option>
          <option value="UA HeatGear">UA HeatGear</option>
          <option value="UA VANISH">UA VANISH</option>
        </select>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-cyan-300 text-lg mb-2 font-semibold tracking-wide">Color</h3>
        <input
          type="text"
          placeholder="Ej: Verde"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 rounded-lg text-black"
        />
      </div>

      {/* Talla */}
      <div>
        <h3 className="text-cyan-300 text-lg mb-2 font-semibold tracking-wide">Talla</h3>
        <select
          className="w-full p-2 rounded-lg text-black"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Calificación de estrellas */}
      <div>
        <h3 className="text-cyan-300 text-lg mb-2 font-semibold tracking-wide">Calificar Servicio</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setRating(num)}
              className={`text-2xl transition-all ${rating >= num ? 'text-blue-400' : 'text-gray-400'} hover:scale-125`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Botón Aplicar Filtros */}
      <div className="absolute bottom-6 w-full flex justify-center px-4">
        <button
          onClick={handleApplyFilters}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold shadow-xl hover:from-pink-500 hover:to-purple-500 hover:scale-105 transition-all neonBorder"
        >
          Aplicar Filtros 🚀
        </button>
      </div>

      {/* Estilos extra */}
      <style>
        {`
          .neonText {
            text-shadow:
              0 0 5px #00f0ff,
              0 0 10px #00f0ff,
              0 0 20px #00f0ff,
              0 0 40px #0ff,
              0 0 80px #0ff;
          }
          .neonBorder {
            border: 2px solid;
            border-image-slice: 1;
            border-width: 2px;
            border-image-source: linear-gradient(to right, #30cfd0 0%, #330867 100%);
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #ffffff;
          }
          button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px #00f2fe;
          }
          button {
            background: linear-gradient(90deg, #00f2fe, #4facfe);
            border: none;
            padding: 10px 10px;
            border-radius: 12px;
            box-shadow: 0 0 10px #4facfe;
            color: white;
            font-weight: bold;
            transition: transform 0.3s ease;
          }
        `}
      </style>
    </motion.div>
  );
}

export default FilterSidePanel;
