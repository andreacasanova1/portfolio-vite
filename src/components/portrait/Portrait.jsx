import './portrait.scss';
import React, { useState, useEffect } from 'react';


const Portrait = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollX);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el ancho según tu diseño responsivo
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tituloStyle = {
    transform: `translateY(-${scrollPosition * 0.1}vw)`, // Ajusta la velocidad de desplazamiento vertical del título
  };

  const foto1Style = {
    transform: `translateY(-${scrollPosition * 0.45}vw)`, // Ajusta la velocidad de desplazamiento vertical de la foto 1
    width: isMobile ? '100vw' : '45vw',
  };

  const foto2Style = {
    transform: `translateY(${scrollPosition * 0.45}vw)`, // Ajusta la velocidad de desplazamiento horizontal de la foto 2
    marginRight: isMobile ? '0' : '-45vw',
  };

  return (
    <div className="content-portrait">
      <div className="fondo-tramaBlack" />

      <div className="vertical-text" style={tituloStyle}>  {/*¿como se define este tituloStyle que influye en el desplazamiento*/}
      <h1>Front-end Developer and Visual Artist</h1> 
      </div>

      <img
        className="dress-yellow"
        src="./public/image/dress-yellow.webp"
        alt="Foto 1"
        style={foto1Style}
      />

      <img
        className="retrato"
        src="./public/image/retrato.webp"
        alt="Foto 2"
        style={foto2Style}
      />

      {scrollPosition > window.innerWidth && (
        <div className="fondo-negro">
          <p>Mi nombre es Andrea Casanova soy apasionada del arte y el diseño, Artista Visual multidisciplinar, tengo más de diez años de trayectoria, muchas exposiciones y algunos premios.

                Mi personalidad es inquieta y me gusta estar en constante aprendizaje, por eso comencé a incursionar por el diseño web y hoy me especializo en desarrollo Front end, diseño UX UI y marketing digital.

                Me encanta poner mis conocimientos al servicio de las necesidades de otros artistas y fotógrafos y ayudarlos a destacar sus obras, no obstante, estoy capacitada para desarrollar cualquier tipo de proyecto web.</p>
        </div>
      )}
    </div>
  );
};

export default Portrait;
    
    
    
    