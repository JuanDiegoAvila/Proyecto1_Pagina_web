import React from 'react'
import './styles/Necesitas.css'

const Necesitas = () => {
  const titulos = ['Unity Learn', 'Tienda de recursos', 'Documentación', 'Servicios de videojuegos']
  const contenido = ['Desarrolla tus habilidades de Unity con sesiones en vivo y más de 750 horas de contenido de aprendizaje a pedido diseñado para creadores, cualquiera sea su nivel de perfeccionamiento.',
    'Inicia tu proyecto y llega a la línea de meta más rápido con un catálogo en constante crecimiento de herramientas y recursos gratuitos y de pago.',
    'Ponte al corriente con las características y los flujos de trabajo de Unity, y descubre cómo crear y usar scripts con nuestra documentación completa y muy bien organizada.',
    'Todo lo que necesitas para crear tu juego, administrarlo y hacerlo crecer. Lleva tu juego al siguiente nivel con servicios de eficacia comprobada para cada etapa del ciclo de vida de desarrollo.']

  const links = ['Comenzar el aprendizaje', 'Más información', 'Más información', 'Más informacion']

  return (
    <div className="necesitas-container">
      <div className="necesitas-intro-container">
        <h1 className="necesitas-h1-titulo">Todo lo que necesitas para alcanzar el éxito</h1>
        <p className="necesitas-h1-contenido">
          Unity es mucho más que la mejor plataforma de desarrollo en tiempo real del mundo:
          también es un ecosistema robusto diseñado para ayudarte a tener éxito.
          Únete a nuestra comunidad dinámica de creadores a fin de aprovechar
          lo que necesitas para hacer realidad tu visión.
        </p>
        <button type="button" className="necesitas-button">Leer nuestro blog</button>
      </div>
      <div className="necesitas-squares-container">
        {
          titulos.map((titulo, index) => (
            <div key={index.id} className="necesitas-square">
              <div className="necesitas-container-h1-p">
                <h1 className="necesitas-square-h1">{titulo}</h1>
                <p className="necesitas-square-p">{contenido[index]}</p>
              </div>
              <div className="necesitas-link-container">
                <p className="necesitas-link">{links[index]}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Necesitas
