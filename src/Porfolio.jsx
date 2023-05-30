
import { useState } from 'react'
import './App.css'
import casanova from '../public/casanova.svg'
import App from './App.jsx'

function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <a href="http://www.andreacasanova.art" target="_blank">
          <img src={casanova} className="logo casanova" alt="Casanova-logo" />
        </a>
        
        <div className="card"> 
          <button onClick={() => setCount((count) => count + 2)}>
            count is {count}
          </button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> aqui pondre otra cosa
        </p>
    </div>  
   
    </>
   )
}

export default Portfolio
