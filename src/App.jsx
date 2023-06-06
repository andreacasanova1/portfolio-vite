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
