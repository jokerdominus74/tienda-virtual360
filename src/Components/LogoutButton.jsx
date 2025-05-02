import React from 'react';
import { useAuth } from '../Context/AuthContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth(); // Obtiene la función de logout
  const navigate = useNavigate(); // Hook para redireccionar

  const handleLogout = async () => {
    try {
      await logout(); // Asegura que logout se ejecute correctamente si es una función asíncrona
      navigate('/iniciar-sesion'); // Redirige al login
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
