import React from "react";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-4">Contáctanos</h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
