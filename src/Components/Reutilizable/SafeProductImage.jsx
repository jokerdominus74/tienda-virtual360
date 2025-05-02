// SafeProductImage.jsx
import React, { useState } from "react";

const SafeProductImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    console.warn(`⚠️ Imagen bloqueada o inválida: ${src}`);
    setImgSrc("/fallback-product.jpg"); // Imagen local de respaldo
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default SafeProductImage;
