import './artshop.scss';
import React from 'react';

const Artshop = (props) => {
    return (
      <>      
          <section className="content-cuervos__artshop">
              <h1 className="vertical-text__artshop">Art Shop</h1>
                    <div className='sofa-content__artshop'>
                        <div className="sofa_imagen">
                          <img src={props.image} alt={props.alt} />
                        </div>
                        
                       <div className="logo__btn"> 
                            <a href="ruta_del_enlace">
                              <img src={props.imageLogo} alt="Logo Andrea Casanova" />
                            </a>
                        </div>
                    </div>
          </section>  
    </>
    );
  } 

  export default Artshop
