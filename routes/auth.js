import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import { validateUserInput } from '../middlewares/validateUserInput.js';

const router = express.Router();

// REGISTRO
router.post('/register', validateUserInput, registerUser);

// INICIO DE SESIÓN
router.post('/login', validateUserInput, loginUser);

// Manejo global de errores (para Express 5+ es opcional)
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error en el servidor' });
});

export default router;
