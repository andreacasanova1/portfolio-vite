import './artshop.scss';
import React from 'react';

const Artshop = () => {
    return (
      <>

    <div className="artshop-content-cuervos">
        <div>
            <h1 className="vertical-text">Art Shop</h1>
        </div>
            <div>
                <img
                    src="public/image/sofa.webp"
                    alt="compra arte"
                    className="sofa_imagen"
                />
                    
                    <a href="ruta_del_enlace">
                    <img
                    src="./public/frame1.svg"
                    alt="Logo con enlace"
                    className="mi__logo"
                    />
                    </a>
                    
            </div>
            
    </div>        

    </>
    );
  } 

  export default Artshop
