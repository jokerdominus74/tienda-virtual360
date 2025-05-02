import express from 'express';

const router = express.Router();

// Ruta para registrar un usuario (ejemplo)
router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    res.json({ message: `Usuario ${username} registrado correctamente` });
});

export default router;