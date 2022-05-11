import React from 'react'

import './styles/Footer.css'
import Facebook from '../public/img/facebook.svg'
import Instagram from '../public/img/instagram.svg'
import Linkedin from '../public/img/linkedin.svg'
import Twitter from '../public/img/twitter.svg'
import Youtube from '../public/img/youtube.svg'

const Footer = () => (

  <div className="footer-container">
    <div className="footer-info-container">
      <div className="idioma-redes-container">
        <div className="idioma-container">
          <h1>Idioma</h1>
          <ul className="idiomas-ul">
            <li>English</li>
            <li>Deutsch</li>
            <li>日本語</li>
            <li>Français</li>
            <li>Português</li>
            <li>中文</li>
            <li>Español</li>
            <li>Русский</li>
            <li>한국어</li>
          </ul>
        </div>
        <div className="redes-container">
          <h1>Redes sociales</h1>
          <div className="redes">
            <div className="red" style={{ backgroundImage: `url(${Youtube})`, width: '15px', height: '19px' }} />
            <div className="red" style={{ backgroundImage: `url(${Linkedin})`, width: '18px', height: '19px' }} />
            <div className="red" style={{ backgroundImage: `url(${Twitter})`, width: '18px', height: '19px' }} />
            <div className="red" style={{ backgroundImage: `url(${Facebook})`, width: '9px', height: '19px' }} />
            <div className="red" style={{ backgroundImage: `url(${Instagram})`, width: '18px', height: '19px' }} />
          </div>
        </div>
      </div>
      <div className="linea">
        <hr />
      </div>
      <div className="lists-container">
        <div className="container-ul">
          <h1>Comprar</h1>
          <ul className="lists-ul">
            <li style={{ marginTop: '-21px' }}>Productos</li>
            <li>Unity Ads</li>
            <li style={{ color: 'black' }}>o</li>
            <li>Suscripción</li>
            <li>Asset Store</li>
            <li>Revendedores</li>
          </ul>
        </div>
        <div className="container-ul">
          <h1>Educación</h1>
          <ul className="lists-ul">
            <li style={{ marginTop: '-21px' }}>Estudiantes</li>
            <li>Docentes</li>
            <li>Certificación</li>
            <li>Averiguar</li>
            <li>Centro de excelencia</li>
          </ul>
        </div>
        <div className="container-ul">
          <h1>Descargar</h1>
          <ul className="lists-ul">
            <li style={{ marginTop: '-21px' }}>Obtener Unity</li>
            <li>Descargar archivo</li>
            <li>Programa beta</li>
          </ul>
        </div>
        <div className="container-ul">
          <h1>Unity Labs</h1>
          <ul className="lists-ul">
            <li style={{ marginTop: '-21px' }}>Labs</li>
            <li>Publicaciones</li>
          </ul>
        </div>
        <div className="container-ul">
          <h1>Recursos</h1>
          <ul className="lists-ul">
            <li style={{ marginTop: '-21px' }}>Plataforma Learn</li>
            <li>Comunidad</li>
            <li>Documentación</li>
            <li>Preguntas y respuestas Unity</li>
            <li>Preguntas frecuentes</li>
            <li>Estado del servicio</li>
            <li>Casos de estudio</li>
            <li>Made with Unity</li>
          </ul>
        </div>
        <div className="container-ul">
          <h1>Unity</h1>
          <ul className="lists-ul">
            <li style={{ marginTop: '-21px' }}>Nuestra empresa</li>
            <li>Marca</li>
            <li>Boletín</li>
            <li>Blog</li>
            <li>Eventos</li>
            <li>Carreras</li>
            <li>Ayuda</li>
            <li>Prensa</li>
            <li>Socios</li>
            <li>Inversionistas</li>
            <li>Afiliados</li>
            <li>Seguridad</li>
            <li>Impacto social</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright-container">
        <h1>Copyright © 2022 Unity Technologies</h1>
        <div className="copyright-list">
          <p>Información legal</p>
          <p>Política de privacidad</p>
          <p>Cookies</p>
          <p>No quiero que se venda mi información personal</p>
          <p>Configuración de cookies</p>
        </div>
      </div>
      <div className="footer-last-container">
        &quot;Unity&quot;, los logotipos de Unity y otras marcas comerciales de Unity son
        marcas comerciales o marcas registradas de Unity Technologies o sus afiliadas en
        Estados Unidos y el resto del mundo (
        <span>más información aquí</span>
        ). Los demás nombres o
        marcas son marcas comerciales de sus respectivos propietarios.
      </div>
    </div>
  </div>

)

export default Footer
