import React from 'react'
import Container31 from '../public/img/container-3-1.jpg'
import Container32 from '../public/img/container-3-2.jpg'
import Container33 from '../public/img/container-3-3.jpg'
import Container34 from '../public/img/container-3-4.jpg'
import Container35 from '../public/img/container-3-5.jpg'
import Container36 from '../public/img/container-3-6.jpg'
import './styles/LoUltimo.css'

const titulos = ['Recursos para enseñar Unity', 'Herramienta Bolt para scripting visual', 'Unity Computer Vision']
const contenido = ['Obtén recursos gratuitos y soporte para los docentes y las escuelas afectadas por el COVID-19.',
  'Ahora está incluida en todos los planes de Unity sin costo adicional.',
  'Obtén datos de alta calidad, perfectamente etiquetados para el entrenamiento utilizado en la visión computarizada a una fracción del costo.']
const images = [Container34, Container35, Container36]

const LoUltimo = () => (

  <div className="lo-ultimo-container">
    <h1 className="lo-ultimo-titulo">Lo último de Unity</h1>
    <div className="lo-ultimo-image-container">
      <div className="lo-ultimo-big-image" style={{ backgroundImage: `url(${Container31})` }}>
        <h1>¡Bienvenido, Weta Digital!</h1>
        <p>Herramientas VFX altamente sofisticadas para millones de creadores en todo el mundo</p>
      </div>
      <div className="lo-ultimo-small-container">
        <div className="lo-ultimo-small-image" style={{ backgroundImage: `url(${Container32})` }}>
          <h1>Para todos los suscriptores de Unity Pro y Enterprise</h1>
          <p>
            Accede al nuevo Centro del éxito de Unity para obtener consejos útiles
            y prácticas recomendadas.
          </p>
        </div>
        <div className="lo-ultimo-small-image" style={{ backgroundImage: `url(${Container33})` }}>
          <h1>Más impulso</h1>
          <p>
            Obtén más impulso en tu próximo
            proyecto con el conjunto completo de herramientas DevOps de Unity.
          </p>
        </div>
      </div>
    </div>
    <div className="lo-ultimo-text-container">
      {
        titulos.map((titulo, index) => (
          <div className="lo-ultimo-text" key={index.id}>
            <div className="lo-ultimo-text-image" style={{ backgroundImage: `url(${images[index]})` }} />
            <div className="lo-ultimo-text-h1-p">
              <h1>{titulo}</h1>
              <p>{contenido[index]}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>

)

export default LoUltimo
