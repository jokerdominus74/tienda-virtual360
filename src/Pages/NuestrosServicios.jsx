import React from "react";

const NuestrosServicios = () => {
  return (
    <div>
      {/* SECCIÓN PRINCIPAL */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-blue-700 text-4xl md:text-7xl font-bold">
          Te damos la bienvenida al servicio al cliente
        </h1>
        <p className="text-2xl md:text-4xl mt-6">
          ¡Nuestro servicio de atención al cliente es excepcional!
        </p>
        <p className="text-lg md:text-2xl text-justify mt-4">
          En nombre de todo nuestro equipo, Gracias por confiar en nosotros. Estamos aquí para brindarte asistencia de calidad, 
          soluciones rápidas y una experiencia excepcional en cada interacción.
        </p>
        <p className="text-lg md:text-2xl text-justify mt-4">
          Ya sea que tengas preguntas, comentarios o necesites resolver algún problema, estamos aquí
          para escucharte y ofrecerte soluciones efectivas y rápidas.
        </p>
        <p className="text-lg md:text-2xl text-justify mt-4 font-semibold">
          ¡Gracias por elegirnos!
        </p>
        <h2 className="text-blue-700 text-3xl md:text-4xl font-bold mt-6">TIENDA VIRTUAL.BLUE</h2>
      </section>

      {/* SECCIÓN DE BIBLIOTECA DE AYUDA */}
      <section className="relative w-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/tienda%20virtual%202.jpg?alt=media&token=c9dac043-e73e-43cf-8de9-23b9715787c3"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Tienda Virtual"
        />
        <div className="relative bg-gray-900 bg-opacity-75 px-6 py-16 md:py-20 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestra Biblioteca <span className="text-blue-500">¡de ayuda!</span>
            </h2>

            {/* Barra de búsqueda */}
            <div className="flex items-center gap-2 mb-6">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full p-2 rounded border border-gray-400 text-black"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Buscar</button>
            </div>

            {/* Listado de ayuda */}
            <ul className="space-y-2 text-lg">
              <li>¿Dónde está mi pedido?</li>
              <li>Envíos y entregas</li>
              <li>Devoluciones, reembolsos y soporte con los productos</li>
              <li>Administrar Tu Cuenta</li>
              <li>Seguridad y Privacidad</li>
              <li>Pago, Precios y Promociones</li>
              <li>Servicios para productos grandes y pesados</li>
              <li>Cuentas Blue</li>
              <li>Otros servicios</li>
            </ul>
            <a
              href="/"
              className="inline-flex items-center font-semibold tracking-wider text-blue-400 hover:text-blue-600 mt-6"
            >
              Aprende más
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l6-6a1,1,0,0,0,0-.708l6-6a1,1,0,0,0-.708,0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuestrosServicios;
