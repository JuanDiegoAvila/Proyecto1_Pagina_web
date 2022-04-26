
import React from 'react'
import Logo from '../public/img/logo.png'
import Menu from '../public/img/menu.png'
import Profile from '../public/img/profile.png'
import Search from '../public/img/search.png'

import './TitleBar.css'

const TitleBar = () => {
    return(
        <div className = "title-container">
            <div className = "logo" style={{backgroundImage: `url(${Logo})`}}/>

            <div className = "nav-container">
                <button>Productos</button>
                <button>Soluciones</button>
                <button>Aprendizaje</button>
                <button>Ayuda y Servicios</button>
                <button>Comunidad</button>
                <button>Ver más</button>
            </div>
            

            <div className= "comenzemos-container">
                <button className = "comencemos">Comencemos</button>
            </div>
            
            <div className="other-container">
                <div className = "other" style={{backgroundImage: `url(${Search})`}}/>
                <div className = "other" style={{backgroundImage: `url(${Menu})`}}/>
                <div className = "other" style={{backgroundImage: `url(${Profile})`}}/>
            </div>
            
        </div>
    )
}

export default TitleBar