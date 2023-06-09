import React, { useState, useEffect } from 'react';
import './loop.scss';

    



const ImageLoopAnimation = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(currentImage === 1 ? 2 : 1);
      },);
    
      return () => {
        clearInterval(interval);
      }
    }, []);
  
    return (
      <div className="background child">
          <img className="pajaro" src={'/frame' + currentImage + '.svg'} alt="SVG Image" />
      </div>
    );
  };
  
  export default ImageLoopAnimation; 