import React, { useState } from "react";
import emailjs from "emailjs-com";

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

    // Configuración de EmailJS
    const serviceID = "TU_SERVICE_ID"; // Reemplaza con tu Service ID
    const templateID = "TU_TEMPLATE_ID"; // Reemplaza con tu Template ID
    const userID = "TU_PUBLIC_KEY"; // Reemplaza con tu Public Key

    const templateParams = {
      to_name: "Tienda Virtual Blue",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      from_mobile: formData.mobile,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Correo enviado exitosamente!", response.status, response.text);
        alert("¡Mensaje enviado con éxito!");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error, intenta nuevamente.");
      });

    setFormData({ firstName: "", lastName: "", email: "", mobile: "" });
  };

  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          CONTACTENOS
        </h3>
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
  );
};

export default ContactSection;
