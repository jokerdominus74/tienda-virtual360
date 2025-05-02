import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Ruta para registro de usuario
router.post('/register', async (req, res) => {
  const { username, name, email, password, address, phoneNumber } = req.body;

  try {
    const newUser = new User({
      username,
      name,
      email: email.toLowerCase(),
      password,
      address,
      phoneNumber,
    });

    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    res.status(400).json({ message: 'Error al registrar usuario', error: error.message });
  }
});

export default router;
