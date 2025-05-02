import React from 'react';
import AuthContainer from '@/Components/AuthContainer';
import LoginForm from '../Components/LoginForm'; // Asegúrate de la ruta correcta
import { useAuth } from '@/Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth(); // 🔹 Obtiene la función de login del contexto
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    login(userData); // 🔹 Guarda el usuario en el contexto
    navigate('/');  // 🔹 Redirige a Home después del login
  };

  return (
    <AuthContainer>
      <LoginForm onLogin={handleLogin} />
    </AuthContainer>
  );
};

export default Login;
