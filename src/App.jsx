import React from 'react'
import TitleBar from './TitleBar.jsx'
import IntroContainer from './IntroContainer.jsx'
import Floater from './Floater.jsx'
import SquareContainer from './SquareContainer.jsx'
import GrayContainer from './GrayContainer.jsx'
import ProductosDestacados from './ProductosDestacados.jsx'
import Necesitas from './Necesitas.jsx'
import LoUltimo from './LoUltimo.jsx'

const App = () => (

  <div style={{ overflowY: 'scroll', height: '100vh', overflowX: 'hidden' }}>
    <Floater />
    <TitleBar />
    <IntroContainer />
    <SquareContainer />
    <GrayContainer />
    <ProductosDestacados />
    <Necesitas />
    <LoUltimo />
  </div>

)

export default App
