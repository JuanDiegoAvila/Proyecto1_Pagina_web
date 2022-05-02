import React from 'react'
import SquareNI from './SquareNI.jsx'
import './styles/SquareContainer.css'

const SquareContainer = () => {
  const titles = ['Juegos',
    'Automóviles, transporte y fabricación',
    'Películas, animación y cinemática',
    'Arquitectura, ingeniería y construcción']
  const content = ['Todo lo que necesitas para crear y operar los juegos.',
    'Obtén una ventaja competitiva en el panorama en rápida evolución del sector con el 3D en tiempo real.',
    'Libertad artística sin precedentes y una producción más rápida para los proyectos de filmación y animación.',
    'Crea experiencias 3D envolventes para aplicaciones del mundo real a escala.']

  return (

    <div className="square-container-1">
      {
        titles.map((title, index) => (
          <SquareNI key={index.id} title={title} content={content[index]} />
        ))
      }
    </div>

  )
}

export default SquareContainer
