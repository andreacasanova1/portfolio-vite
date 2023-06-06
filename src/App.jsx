import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './scss/global.scss';


import casanova from '/casanova.svg'
import Portfolio from './Porfolio'
import Portrait from './components/portrait/Portrait' 
import Cards from './components/cards/Cards'
import Artshop from './components/artshop/Artshop'
import Form from './components/form/Form'
import ImageLoopAnimation from './components/loop/Loop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <main>
      <Routes>
          <Route path='/ImageLoopAnimation' element={<ImageLoopAnimation/>} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portrait' element={<Portrait/>} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/artshop' element={<Artshop />} />
          <Route path='/form' element={<Form />} />       
      </Routes>
      
      </main>
      <h2>The simple page is built using React technology.  </h2>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="http://www.andreacasanova.art" target="_blank">
          <img src={casanova} className="logo casanova" alt="Casanova-logo" />
        </a>
      </div>
      <h1>Vite + React + Casanova</h1>
      <div className="card">
        
      <button className='portfolio'>
        <Link to='/Portfolio'>Portfolio</Link>
      </button>
        <p className='card'>
        Click on Casanova and Portfolio for view my work. 
          
        </p>
      </div>
      
    </>
  )
}

export default App
