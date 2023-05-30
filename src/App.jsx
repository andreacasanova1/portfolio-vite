import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import casanova from '../public/casanova.svg'
import Portfolio from './Porfolio'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1>soy la home del portfolio</h1>
   
    <main>
        <Routes>
          
          <Route path='/' element={<Portfolio />} />
          <Route path='/portrait' element={<Portrait/>} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/artshop' element={<Artshop />} />
          <Route path='/form' element={<Form />} />       
          
          <Route path='/styleguide' element={<Styleguide />} />   
        </Routes>
      </main>

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
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>

        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
