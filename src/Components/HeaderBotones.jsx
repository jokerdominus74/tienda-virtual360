// src/Components/HeaderBotones.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeaderBotones = () => {
  const botones = [
    { id: "todoBtn", label: "TODO", path: "/todo" },
    { id: "ofertasBtn", label: "OFERTAS DEL DÍA", path: "/ofertas" },
    { id: "listasBtn", label: "LISTAS", path: "/listas" },
    { id: "referidosBtn", label: "REFERIDOS", path: "/referidos" },
    { id: "servicioBtn", label: "SERVICIO AL CLIENTE", path: "/servicio" },
    { id: "venderBtn", label: "VENDER", path: "/vender" },
    { id: "nuevoNegocioBtn", label: "NUEVO NEGOCIO", path: "/nuevo-negocio" },
    { id: "nuevosProductosBtn", label: "NUEVOS PRODUCTOS", path: "/nuevos-productos" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-cyan-600 py-3 mt-24 shadow-xl rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-5">
          {botones.map((btn) => (
            <Link key={btn.id} to={btn.path}>
              <button
                id={btn.id}
                type="button"
                className="bg-metallic-blue text-white text-sm px-6 py-3 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-300 transform hover:scale-110"
              >
                {btn.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderBotones;
