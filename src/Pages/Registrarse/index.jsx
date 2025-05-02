import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    termsAccepted: false,
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          name: formData.name,
          email: formData.email,
          password: formData.password,
          address: formData.address,
          phoneNumber: formData.phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Usuario registrado exitosamente');
        navigate('/login'); // Redirigir automáticamente
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('⚠️ Hubo un problema con el registro');
    }
  };

  return (
    <div className="registro-wrapper">
      <div className="registro-container">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Nombre de usuario" value={formData.username} onChange={handleChange} required />
          <input type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" value={formData.confirmPassword} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
          <input type="tel" name="phoneNumber" placeholder="Número de teléfono" value={formData.phoneNumber} onChange={handleChange} required />

          <label className="checkbox-label">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
            Acepto los términos y condiciones
          </label>

          <button type="submit">Registrarse</button>
        </form>

        {/* Enlace con onClick para redirigir manualmente */}
        <p>
          ¿Ya tienes una cuenta? 
          <Link to="/login" onClick={(e) => { e.preventDefault(); navigate('/iniciar-sesion'); }}> Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
