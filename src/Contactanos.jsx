import React from 'react'

import Container6 from '../public/img/container-6.jpg'
import './styles/Contactanos.css'

const Contactanos = () => (

  <div className="contactanos-container">
    <div className="contactanos-image-contanier" style={{ backgroundImage: `url(${Container6})` }}>
      <h1 className="contactanos-title">
        Soluciones para grandes equipos que quieren alcanzar grandes sueños
      </h1>
      <p className="contactanos-content">
        Nuestras soluciones corporativas les proporcionan a grandes equipos y
        organizaciones en cada industria todo lo que necesitan para construir
        increíbles proyectos en 3D en tiempo real.
      </p>
      <button type="button" className="contactanos-button">
        Contáctanos
      </button>
    </div>
  </div>

)

export default Contactanos
