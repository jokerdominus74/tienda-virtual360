const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Usuario registrado exitosamente');
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Error en el registro:', error);
  }
};
