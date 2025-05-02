import React from "react";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white flex items-center justify-center p-6">
      <div className="bg-white text-black shadow-xl rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-blue-900 text-center mb-6">
          Términos y Condiciones
        </h1>
        <p className="text-gray-700 text-lg">
          Bienvenido a nuestra plataforma. Antes de utilizar nuestros servicios, es importante que leas y comprendas nuestros términos y condiciones.
        </p>
        
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">1. Uso del Sitio</h2>
          <p className="text-gray-700">
            Al acceder a nuestro sitio web, aceptas cumplir con nuestras normas y regulaciones.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">2. Derechos de Autor</h2>
          <p className="text-gray-700">
            Todo el contenido de este sitio, incluyendo imágenes, logotipos y textos, está protegido por derechos de autor.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">3. Política de Privacidad</h2>
          <p className="text-gray-700">
            Nos comprometemos a proteger tu información personal de acuerdo con nuestras políticas de privacidad.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">4. Modificaciones</h2>
          <p className="text-gray-700">
            Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Última actualización: <span className="font-semibold">Marzo 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
