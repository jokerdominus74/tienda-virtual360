import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-5">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <h1 className="text-3xl font-bold italic">
              <span className="text-black">TIENDA</span>VIRTUAL.BLUE
            </h1>
            <p className="mt-2 text-gray-300">
              TiendaVirtual.blue: Más que Compras, una Revolución Innovadora.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Enlaces populares</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">➜ INICIO</Link></li>
              <li><Link to="/sobre-nosotros" className="hover:text-gray-300">➜ SOBRE NOSOTROS</Link></li>
              <li><Link to="/nuestros-servicios" className="hover:text-gray-300">➜ NUESTROS SERVICIOS</Link></li>
              <li><Link to="/contacto" className="hover:text-gray-300">➜ CONTACTO</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Ponerse en contacto</h5>
            <p>📍 Calle # 44 - 120 Alpujarra</p>
            <p>📞 3506440319</p>
            <p>✉️ tiendavirtual.blue7@gmail.com</p>

            {/* Redes sociales */}
            <div className="flex space-x-3 mt-4">
              <a href="https://twitter.com" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-800 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-800 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-800 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-800 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Copyright y enlaces */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>&copy; <Link to="/" className="hover:underline">Tienda virtual.blue</Link> Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/privacidad" className="hover:underline">Privacidad</Link>
            <Link to="/terminos" className="hover:underline">Términos</Link>
            <Link to="/faq" className="hover:underline">Preguntas frecuentes</Link>
            <Link to="/ayuda" className="hover:underline">Ayuda</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
