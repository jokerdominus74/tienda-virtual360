import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/proyecto360', {
      
    });

    console.log(`✅ Conectado a MongoDB en: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Error de conexión a MongoDB:', error.message);
    process.exit(1); // Cierra la app en caso de error
  }
};

export default connectDB;


