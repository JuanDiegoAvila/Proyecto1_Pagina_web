import React from 'react'
import './styles/ProductosDestacados.css'
import Container21 from '../public/img/container-2-1.jpg'
import Container22 from '../public/img/container-2-2.jpg'

const ProductosDestacados = () => (

  <div className="productos-destacados-container">
    <h1 className="productos-destacados-titulo">Productos destacados</h1>
    <div className="productos-destacados-a-container">
      <div className="producto-destacado">
        <div className="producto-destacado-imagen" style={{ backgroundImage: `url(${Container21})` }} />
        <div className="producto-destacado-text">
          <div className="producto-destacado-h1-p">
            <h1>Unity Pro</h1>
            <p className="producto-destacado-content">
              La solución completa para que los profesionales creen y
              operen experiencias en 3D en tiempo real.
              Pon en manos de tu equipo el poder de todo un ecosistema de herramientas,
              soporte y comunidad para obtener los mejores resultados más rápido.
            </p>
          </div>
          <div className="producto-destacado-links-container">
            <p className="producto-destacado-links">Suscríbete</p>
            <p className="producto-destacado-links">Más información</p>
          </div>
        </div>
      </div>
      <div className="producto-destacado">
        <div className="producto-destacado-imagen" style={{ backgroundImage: `url(${Container22})` }} />
        <div className="producto-destacado-text">
          <div className="producto-destacado-h1-p">
            <h1>Servicios para videojuegos de Unity</h1>
            <p className="producto-destacado-content">
              Donde sea que te encuentres en el ciclo de vida de desarrollo,
              los servicios para videojuegos de Unity llevan tu juego al siguiente nivel.
              Haz realidad lo que imaginas con nuestras herramientas para ejecutar tu juego en
              línea,
              aumentar los ingresos, conocer información sobre los jugadores y mucho más.
            </p>
          </div>
          <div className="producto-destacado-links-container">
            <p className="producto-destacado-links">Comenzar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProductosDestacados
