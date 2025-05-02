import React from "react";

const Faq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white flex items-center justify-center p-6">
      <div className="bg-white text-black shadow-xl rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-blue-900 text-center mb-6">
          Preguntas Frecuentes (FAQ)
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Encuentra respuestas a las dudas más comunes sobre nuestros servicios.
        </p>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-800">¿Cómo puedo registrarme?</h2>
            <p className="text-gray-700">
              Puedes registrarte haciendo clic en el botón "Registrarse" en la parte superior de la página y completando el formulario con tu información.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-800">¿Cuáles son las opciones de pago?</h2>
            <p className="text-gray-700">
              Aceptamos pagos con tarjeta de crédito, débito, PayPal y transferencias bancarias.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-800">¿Ofrecen envíos internacionales?</h2>
            <p className="text-gray-700">
              Sí, realizamos envíos a varios países. Consulta nuestras opciones de envío en la página de checkout.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-800">¿Cómo puedo contactar con soporte?</h2>
            <p className="text-gray-700">
              Puedes enviarnos un mensaje a través de nuestra página de contacto o escribirnos por WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            ¿No encuentras tu pregunta? <span className="font-semibold text-blue-700 cursor-pointer hover:underline">
              Contáctanos aquí
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

