import Portrait from './components/portrait/Portrait';
import Cards from './components/cards/Cards';
import Artshop from './components/artshop/Artshop';
import Form from './components/form/Form';
import Loop from '../src/components/loop/Loop';
import Icons from '../src/components/iconsSvg/Icons';
import './scss/global.scss';
import './scroll-horizontal';


import React, { useState, useEffect } from 'react';
import { Slide } from "react-awesome-reveal";


export default function Portfolio() {
    return (
      <>

<div id="horizontal"> 
      <div class="pane">< Loop/></div>
      <div class="pane">< Portrait/></div>
        
        <div style={{ display: 'flex', gap: 'calc(100vw / 3)', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <Slide direction='down'  delay='1000' duration='1000' cascade='true'>
               
              <div class="pane">< Cards title="Diseño y desarrollo web"
                        image="public\image\diseño-desarrollo.webp" 
                        paragraph='Diseño sitios web y portafolios para artistas 
                        que les permita gestionar su propio e-commerce'

                /></div>
                 <div class="pane">< Cards title="UX / UI DESIGN"
                        image="public\image\ux-ui.webp" 
                        paragraph="El objetivo de la experiencia 
                        de usuario es optimizar la interaccion de los  
                        humanos con los sistemas tecnologicos mediante el diseño 
                        de interfaces  eficientes e intuitivas."

                /></div>
                 <div class="pane">< Cards title="SEO / Marketing digital"
                        image="public\image\marketing.webp"  
                        paragraph="A través del SEO, mejoro la visibilidad de
                        las empresas en línea al posicionar sus sitios web en
                        los primeros resultados de búsqueda. 
                        Planificar y ejecutar una buena estrategia de marketing 
                        digital es esencial para cualquier empresa "

                /></div>
            </Slide>
      </div>
              <div class="pane">< Artshop /> </div>
        
              <div class="pane">< Form >
                        <div className='form__rr-ss'>
                              <Icons i="public/image/icons/react.svg" 
                                    alt="react" />
                              <Icons i="public/image/icons/github.svg" 
                                    alt="github" />
                              <Icons i="public/image/icons/codepen.svg" 
                                    alt="codepen" />
                              <Icons i="public/image/icons/sass.svg" 
                                    alt="sass" />       
                              <Icons i="public/image/icons/instagram.svg" 
                                    alt="instagram" />
                              <Icons i="public/image/icons/linkd.svg" 
                                    alt="linkedin" />              
                        </div>    

                  </Form> </div>
            

      
        
          
</div>     
      
      </>
    )
}

