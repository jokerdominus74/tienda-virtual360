router.post('/filtrar', async (req, res) => {
    const { categoria, talla, precio } = req.body;
  
    const filtro = {};
  
    if (categoria && categoria !== 'Todas') filtro.categoria = categoria;
    if (talla && talla !== 'Todas') filtro.talla = talla;
    if (precio) filtro.precio = { $lte: precio };
  
    try {
      const productos = await Producto.find(filtro);
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  });
  