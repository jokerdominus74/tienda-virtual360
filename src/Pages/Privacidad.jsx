import React from "react";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white flex items-center justify-center p-10">
      <div className="bg-white text-black shadow-xl rounded-lg p-20 max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-blue-900 text-center mb-10">
          Política de Privacidad
        </h1>
        <p className="text-gray-700 text-lg">
          Tu privacidad es importante para nosotros. En esta sección explicamos cómo recopilamos, usamos y protegemos tu información personal.
        </p>

        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">1. Recopilación de Información</h2>
          <p className="text-gray-700">
            Recopilamos información personal cuando te registras en nuestro sitio, realizas una compra o interactúas con nuestros servicios.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">2. Uso de la Información</h2>
          <p className="text-gray-700">
            Utilizamos tu información para mejorar nuestros servicios, personalizar tu experiencia y ofrecer contenido relevante.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">3. Protección de Datos</h2>
          <p className="text-gray-700">
            Implementamos medidas de seguridad para proteger tu información personal y evitar accesos no autorizados.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">4. Derechos del Usuario</h2>
          <p className="text-gray-700">
            Puedes solicitar la eliminación o modificación de tu información en cualquier momento a través de nuestro soporte.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">5. Cambios en la Política</h2>
          <p className="text-gray-700">
            Nos reservamos el derecho de actualizar esta política en cualquier momento. Te notificaremos sobre cualquier cambio importante.
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

export default Privacidad;
