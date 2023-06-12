import './cards.scss';
import React from 'react';


const Cards = (props) => {

  return (
    <>
   <div style={{transform: 'rotate 90deg' }}>
        <article className='card-padre'>
          <h1 className='vertical-text'>{props.title}</h1>
          <div className='card-flex'>
            
              <div className="card__img">
                <img src={props.image} alt={props.alt} />
              </div> 
              
              <p className="paragraph">{props.paragraph}</p>
              
              <button className="buttonprincipal">Ver más</button>
          </div>
        </article>
    </div>
    </>
  );
};
//poner esto en alguna parte por seguridad=>   dangerouslySetInnerHTML={{__html:props.paragraph}}
export default  Cards;
   


{/*return (
      <>
  <div className='artshop-content-cuervos'>    
      <article className='card-padre'style={{width: '33vw'}}>
        <div className='card-flex'>
          <h1 className='vertical-text'>{props.title}</h1>
          <div>
            <div className="card__img">
              <img src={props.image} alt={props.alt} />
            </div> 
            
            <p className="paragraph">{props.paragraph}</p>
            <button className="buttonprincipal">Ver más</button>
          </div>
        </div>
      </article>
  </div>       
      </>
    );
  };
//poner esto en alguna parte por seguridad=>   dangerouslySetInnerHTML={{__html:props.paragraph}}
export default  Cards;*/}