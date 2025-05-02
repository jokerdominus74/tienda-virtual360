import React from "react";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaWhatsapp } from "react-icons/fa";

const Ayuda = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white flex items-center justify-center px-4 py-8">
      <div className="bg-white text-black shadow-lg rounded-lg p-6 md:p-10 max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-6">
          Centro de Ayuda
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          ¿Tienes dudas? Aquí encontrarás la información y asistencia que necesitas.
        </p>

        <div className="space-y-6">
          {/* Preguntas Frecuentes */}
          <div className="border-b pb-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <FaQuestionCircle className="text-blue-800 text-3xl md:text-4xl mb-2 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-blue-800">Preguntas Frecuentes</h2>
              <p className="text-gray-700">
                Encuentra respuestas en nuestra sección de <a href="/faq" className="text-blue-700 font-semibold hover:underline">FAQ</a>.
              </p>
            </div>
          </div>

          {/* Contacto por Email */}
          <div className="border-b pb-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <FaEnvelope className="text-blue-800 text-3xl md:text-4xl mb-2 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-blue-800">Soporte por Email</h2>
              <p className="text-gray-700">
                Escríbenos a <span className="font-semibold text-blue-700">soporte@tusitio.com</span>.
              </p>
            </div>
          </div>

          {/* Contacto por Teléfono */}
          <div className="border-b pb-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <FaPhoneAlt className="text-blue-800 text-3xl md:text-4xl mb-2 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-blue-800">Llámanos</h2>
              <p className="text-gray-700">
                Disponible de <span className="font-semibold text-blue-700">Lunes a Viernes de 9:00 AM a 6:00 PM</span>.
              </p>
              <p className="text-blue-700 font-semibold">📞 +57 300 123 4567</p>
            </div>
          </div>

          {/* Contacto por WhatsApp */}
          <div className="border-b pb-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <FaWhatsapp className="text-green-600 text-3xl md:text-4xl mb-2 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-blue-800">WhatsApp</h2>
              <p className="text-gray-700">Chatea con nosotros en tiempo real.</p>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                📲 Enviar Mensaje
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            ¿Necesitas más ayuda? <span className="font-semibold text-blue-700 cursor-pointer hover:underline">
              Contáctanos aquí
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
