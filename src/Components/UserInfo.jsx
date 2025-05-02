import React from 'react';
import { useAuth } from '../Context/AuthContext';  // Ajusta la ruta si es necesario
import LogoutButton from './LogoutButton'; // Importamos el botón de cerrar sesión

const UserInfo = () => {
  const { user } = useAuth(); // Obtiene el usuario

  if (!user) return null; // No muestra nada si no hay usuario autenticado

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md max-w-xs mx-auto">
      <p className="text-gray-700 font-semibold"> {user.email} </p>
      <LogoutButton /> {/* Usamos el nuevo botón */}
    </div>
  );
};

export default UserInfo;
