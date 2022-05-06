import React from 'react'

import './styles/Contratamos.css'
import Container5 from '../public/img/container-5.jpg'

const Contratamos = () => (
  <div className="contratamos-container">
    <div className="contratamos-text">
      <h1>
        Juntos, fortalecemos la creatividad en tiempo real por todo el mundo
      </h1>
      <p>
        Únete al equipo global detrás de la plataforma de
        desarrollo en tiempo real más poderosa del mundo.
      </p>
      <div className="cotratamos-button-container">
        <button type="button" className="contratamos-button">Contratamos</button>
      </div>
    </div>
    <div className="contratamos-imagenes" style={{ backgroundImage: `url(${Container5})` }} />
  </div>
)

export default Contratamos
