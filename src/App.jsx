import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import './scss/global.scss';


import casanova from '/casanova.svg'
import Portfolio from './Porfolio'
import Portrait from './components/portrait/Portrait' 
import Cards from './components/cards/Cards'
import Artshop from './components/artshop/Artshop'
import Form from './components/form/Form'
import ImageLoopAnimation from './components/loop/Loop'
import Icons from '../src/components/iconsSvg/Icons'

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
          <Route path='/icons' element={<Icons />} />      
      </Routes>
      
      </main>

      
      
    </>
  )
}

export default App
