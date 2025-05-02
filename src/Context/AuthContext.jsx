import { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Cargar usuario desde localStorage al iniciar
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Guardar usuario en localStorage cuando cambia
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Función de login
  const login = (userData) => {
    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Asegura que se guarde
    }
  };

  // Función de logout mejorada
  const logout = () => {
    localStorage.removeItem('user'); // Borra el usuario de localStorage
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useAuth = () => useContext(AuthContext);
