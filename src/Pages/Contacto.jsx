import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <div className="relative bg-gray-900 bg-opacity-75">
      <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          {/* Texto */}
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              TIENDA VIRTUAL.BLUE <br />
              LA FUERZA DE SU <span className="text-blue-500">NEGOCIO PERSONAL</span>
            </h2>
            <p className="text-justify max-w-xl mb-4 text-base text-white md:text-lg">
              ¡Bienvenido a nuestra red de contacto comercial! Nos complace conectarnos con usted y
              proporcionarle información con nuestros profesionales altamente capacitados.
            </p>
            <a href="/" className="inline-flex items-center font-semibold text-blue-500 hover:text-teal-500">
              Aprende más
            </a>
          </div>

          {/* Formulario */}
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">CONTACTENOS</h3>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Nombre"
                  required
                  type="text"
                  className="w-full h-12 px-4 mb-2 border border-gray-300 rounded focus:outline-none"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  placeholder="Apellido"
                  required
                  type="text"
                  className="w-full h-12 px-4 mb-2 border border-gray-300 rounded focus:outline-none"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  placeholder="E-mail"
                  required
                  type="email"
                  className="w-full h-12 px-4 mb-2 border border-gray-300 rounded focus:outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  placeholder="Móvil"
                  required
                  type="text"
                  className="w-full h-12 px-4 mb-4 border border-gray-300 rounded focus:outline-none"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="w-full h-12 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

