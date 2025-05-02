import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SobreNosotros = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-white text-black">
      {/* Banner superior */}
      <div className="bg-blue-600 py-5 text-center">
        <h1 className="text-5xl font-extrabold text-white uppercase">
          TIENDA VIRTUAL.BLUE
        </h1>
      
      </div>
      {/* Contenido principal */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagen */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              className="w-80 md:w-96 rounded-lg shadow-lg"
              src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/que-productos-vender-en-una-tienda-virtual-o-comercio-electronico.jpg?alt=media&token=63df660b-9d45-4e6a-980c-3816cc784945"
              alt="Logo Tienda Virtual.blue"
            />
          </div>

          {/* Carrusel de Misión y Visión */}
          <div className="w-full md:w-2/3">
            <Slider {...settings}>
              {/* Misión */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold text-blue-600 uppercase text-center">Misión</h2>
                <p className="text-gray-800 text-justify leading-relaxed">
                  Tienda Virtual.blue se compromete a ofrecer una experiencia de compra en línea excepcional, donde la
                  innovación y la modernidad se combinan para proporcionar una amplia selección de productos de calidad.
                  Nuestro enfoque en la seguridad y la facilidad de uso de nuestra plataforma garantiza una interacción
                  innovadora para nuestros clientes. Nos esforzamos por superar las expectativas en cada interacción,
                  creando así relaciones duraderas y fomentando la confianza en nuestra marca.
                </p>
              </div>

              {/* Visión */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold text-blue-600 uppercase text-center">Visión</h2>
                <p className="text-gray-800 text-justify leading-relaxed">
                  Ser la plataforma de comercio electrónico líder en innovación y confianza, ofreciendo a nuestros
                  clientes una experiencia de compra segura, eficiente y moderna. Buscamos revolucionar el mercado
                  digital con tecnología de vanguardia y un servicio excepcional.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* Pie de página azul */}
      
    </section>
  );
};

export default SobreNosotros;
