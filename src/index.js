import { createRoot } from 'react-dom/client'
import React from 'react'
import TitleBar from './TitleBar.jsx'
import IntroContainer from './IntroContainer.jsx'
import Floater from './Floater.jsx'
import SquareContainer from './SquareContainer.jsx'
import GrayContainer from './GrayContainer.jsx'
import ProductosDestacados from './ProductosDestacados.jsx'
import Necesitas from './Necesitas.jsx'

const App = () => (

  <div style={{ overflowY: 'scroll', height: '100vh', overflowX: 'hidden' }}>
    <Floater />
    <TitleBar />
    <IntroContainer />
    <SquareContainer />
    <GrayContainer />
    <ProductosDestacados />
    <Necesitas />
  </div>

)
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App tab="home" />)
