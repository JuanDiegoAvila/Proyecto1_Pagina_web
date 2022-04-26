import React from 'react'

import Container1 from '../public/img/container-1.jpg'
import './IntroContainer.css'

const IntroContainer = () => {
    return(
        <div className="intro-container" style={{backgroundImage: `url(${Container1})`}}>
            <div className="text-intro-container">
                <h1>¡Ya llegó Unity 2021 LTS!</h1>
                <p>La calidad es lo primero. Infinitas posibilidades. Descubre mejoras increíbles que te ayudan a alcanzar tus ambiciones creativas.</p>
            </div>
            
        </div>
    )
}

export default IntroContainer