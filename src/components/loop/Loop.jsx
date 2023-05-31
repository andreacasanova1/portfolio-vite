import React, { useState, useEffect } from 'react';
import './loop.scss';

    const ImageLoopAnimation = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const images = [
      '../src/images/imagesSvg/frame1.svg',
      '../src/images/imagesSvg/frame2.svg'
    ];
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // Calcular el porcentaje de desplazamiento
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  
        // Determinar qué imagen mostrar según el porcentaje de desplazamiento
        const imageIndex = Math.floor(scrollPercentage / 50) % 2;
        setCurrentImage(imageIndex);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Eliminar el listener de evento cuando se desmonta el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="background">
          <img className="pajaro" src={images[currentImage]} alt="SVG Image" />
      </div>
    );
  };
  
  export default ImageLoopAnimation;