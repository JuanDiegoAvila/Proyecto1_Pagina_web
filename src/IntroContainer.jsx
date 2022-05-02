import React from 'react'
import Container1 from '../public/img/container-1.jpg'
import './styles/IntroContainer.css'

const IntroContainer = () => (

  <div className="intro-container" style={{ backgroundImage: `url(${Container1})` }}>
    <div className="text-main-container">
      <div className="text-intro-container">
        <h1>¡Ya llegó Unity 2021 LTS!</h1>
        <p>
          La calidad es lo primero. Infinitas posibilidades.
          Descubre mejoras increíbles que te ayudan a alcanzar tus ambiciones creativas.
        </p>
        <div className="button-main-container">
          <div className="button-intro-container">
            <button type="button" className="mas-informacion">Más información</button>
            <button type="button" className="comenzar">Comenzar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default IntroContainer
