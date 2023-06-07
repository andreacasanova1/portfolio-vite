import Portrait from './components/portrait/Portrait';
import Cards from './components/cards/Cards';
import Artshop from './components/artshop/Artshop';
import Form from './components/form/Form';
import IconChevron from '../src/components/iconsSvg/IconChevron';
import Loop from '../src/components/loop/Loop';
import Icons from '../src/components/iconsSvg/Icons';
import './scss/global.scss';


import React, { useState, useEffect } from 'react';
import { Slide } from "react-awesome-reveal";


export default function Portfolio() {
    return (
      <>
        < Loop />

        < Portrait/>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <Slide direction='down' duration='1000' cascade='true'>
                < Cards title="Diseño y desarrollo web"
                        image="public\image\diseño-desarrollo.webp" 
                        paragraph='Lorem ipsum dolor sit amet consectetur. Molestie eget tortor feugiat massa tristique. Sem laoreet libero tellus mauris metus mattis. Tristique aliquet nulla commodo sapien lacus at. Felis donec porttitor nibh consequat. Nulla ridiculus nulla massa elementum risus ultrices. Id vitae dictumst enim tristique. Sem iaculis curs'

                />
                < Cards title="Diseño y desarrollo webUX / UI DESIGN"
                        image="public\image\ux-ui.webp" 
                        paragraph='Lorem ipsum dolor sit amet consectetur. Molestie eget tortor feugiat massa tristique. Sem laoreet libero tellus mauris metus mattis. Tristique aliquet nulla commodo sapien lacus at. Felis donec porttitor nibh consequat. Nulla ridiculus nulla massa elementum risus ultrices. Id vitae dictumst enim tristique. Sem iaculis curs'

                />
                < Cards title="marketing digital"
                        image="public\image\marketing.webp"  
                        paragraph='Lorem ipsum dolor sit amet consectetur. Molestie eget tortor feugiat massa tristique. Sem laoreet libero tellus mauris metus mattis. Tristique aliquet nulla commodo sapien lacus at. Felis donec porttitor nibh consequat. Nulla ridiculus nulla massa elementum risus ultrices. Id vitae dictumst enim tristique. Sem iaculis curs'

                />
              </Slide>
        
        < Artshop />
        
          < Form >
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

            </Form>


        {/*     < Form className='form__rr-ss'>
              <div>
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

            </Form>*/}
        
          
        </div>  
      
      </>
    )
}

