import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir si no está autenticado
import Layout from '../../Components/Layout';

function MyAccount() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulación de datos de usuario (puedes obtenerlo de tu backend o localStorage)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (!storedUser) {
      navigate('/login'); // Redirigir al login si no está autenticado
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="account-container">
        <h2>Mi Cuenta</h2>
        {user ? (
          <div>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Correo:</strong> {user.email}</p>
            {/* Puedes agregar más detalles y opción de editar aquí */}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </Layout>
  );
}

export default MyAccount;
