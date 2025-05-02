import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/proyecto360';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Conectado a MongoDB');
}).catch(err => {
  console.error('❌ Error de conexión a MongoDB:', err);
  process.exit(1);
});

app.post('/api/products/filter', async (req, res) => {
    const { category, price } = req.body;

    try {
        const query = {};

        if (category) query.category = category;
        if (price) query.price = { $eq: parseFloat(price) }; // 🔹 Filtrado por precio exacto

        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        console.error('❌ Error en filtros:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
