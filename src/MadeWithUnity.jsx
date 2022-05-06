import React, { useState } from 'react'
import Container4 from '../public/img/container-4.jpg'
import Container42 from '../public/img/container-4-2.jpg'
import Container43 from '../public/img/container-4-3.jpg'

import './styles/MadeWithUnity.css'

const MadeWithUnity = () => {
  const [image, setImagen] = useState(Container4)
  const classname = ['made-with-unity-box-transparent', 'made-with-unity-box-transparent', 'made-with-unity-box-transparent']
  const titulos = ['Praey for the Gods', 'Pharos AR', 'Cómo crear un auto configurable en Unity HDRP']
  const subTitulos = ['de No Matter Studios', 'de Childish Gambino, Wolf + Rothstein y MediaMonks', 'de Edward Martin']
  const contenido = ['Un gran videojuego de supervivencia invernal de un estudio pequeño y talentoso.',
    'Entra al mundo místico de Childish Gambino en la primera experiencia musical de AR multiplataforma y multijugador del mundo.',
    'Detalles únicos sobre el renderizado en tiempo real del sector automotor.']

  const handleHoverEnter = (index) => {
    console.log(index)

    setImagen([Container4, Container42, Container43][index])
  }

  return (
    <div className="made-with-unity-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="made-with-unity-intro-container">
        <h1 className="made-with-unity-titulo">Made with Unity</h1>
        <p className="made-with-unity-contenido">
          Descubre historias inspiradoras de los creadores
          que eligieron Unity para materializar sus proyectos.
        </p>
        <button type="button" className="made-with-unity-button">Más historias</button>
      </div>
      <div className="made-with-unity-box-container">
        {
          titulos.map((title, index) => (
            <div
              key={index.id}
              className={classname[index]}
              onMouseEnter={() => handleHoverEnter(index)}
            >
              <div className="made-with-unity-box-text">
                <div className="made-with-unity-box-h1-p">
                  <h1>{title}</h1>
                  <p className="made-with-unity-subtitulos">{subTitulos[index]}</p>
                  <p className="made-with-unity-contenido-p">{contenido[index]}</p>
                </div>
                <div className="made-with-unity-link-container">
                  <p className="mas-informacion-made-with-unity">Más información</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MadeWithUnity
