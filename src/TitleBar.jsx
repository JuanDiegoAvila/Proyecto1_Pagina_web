import React from 'react'
import Logo from '../public/img/logo.svg'
import Menu from '../public/img/menu.svg'
import Profile from '../public/img/profile.svg'
import Search from '../public/img/search.svg'
import './styles/TitleBar.css'

const TitleBar = () => (
  <div className="title-container">
    <div className="logo" style={{ backgroundImage: `url(${Logo})` }} />
    <div className="nav-container">
      <button type="button">Productos</button>
      <button type="button">Soluciones</button>
      <button type="button">Aprendizaje</button>
      <button type="button">Ayuda y Servicios</button>
      <button type="button">Comunidad</button>
      <button type="button">Ver Más</button>
    </div>
    <div className="comenzemos-container">
      <button type="button" className="comencemos">
        Comencemos
      </button>
    </div>
    <div className="other-container">
      <div className="other" style={{ backgroundImage: `url(${Search})` }} />
    </div>
    <div className="other-container">
      <div className="other" style={{ backgroundImage: `url(${Menu})` }} />
    </div>
    <div className="other-container">
      <div className="other" style={{ backgroundImage: `url(${Profile})` }} />
    </div>
  </div>
)
export default TitleBar
