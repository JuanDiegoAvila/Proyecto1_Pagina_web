import React from 'react'
import './styles/GrayContainer.css'
import Accounts from '../public/img/accounts.png'

const GrayContainer = () => (

  <div className="gray-container-2">
    <div className="gray-text-container">
      <div className="info-container-2" style={{ marginLeft: '25px' }}>
        <div className="icons-container-2" style={{ backgroundImage: 'url(https://api.iconify.design/mdi/check-circle.svg?color=%233ac561)' }} />
        <p className="info-container-text">
          <strong>Libre de regalías: </strong>
          te quedas con todo lo que ganas
        </p>
      </div>
      <div className="info-container-2">
        <div className="icons-container-2" style={{ backgroundImage: 'url(https://api.iconify.design/ic/baseline-device-hub.svg?color=%233ac561)' }} />
        <p className="info-container-text">
          <strong>Más de 20 plataformas diferentes </strong>
          ejecutan proyectos creados con Unity
        </p>
      </div>
      <div className="info-container-2">
        <div className="icons-container-2" style={{ backgroundImage: `url(${Accounts})` }} />
        <p className="info-container-text">
          Con la confianza de
          <strong> 1,5 millones de creadores activos </strong>
          por mes
        </p>
      </div>
    </div>
  </div>

)
export default GrayContainer
