import express from 'express';
import usersRoutes from './user.js';
import productsRoutes from './products.js';


const router = express.Router();

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);

export default router;
