import React from 'react'
import './styles/Logos.css'

import android from '../public/img/ICONS/android.png'
import androidtv from '../public/img/ICONS/androidtv.png'
import ARCore from '../public/img/ICONS/ARCore.png'
import holoLens from '../public/img/ICONS/holoLens.png'
import iOS from '../public/img/ICONS/iOS.png'
import linux from '../public/img/ICONS/linux.png'
import magicLeap from '../public/img/ICONS/magicLeap.png'
import nintendo from '../public/img/ICONS/nintendo.png'
import oculus from '../public/img/ICONS/oculus.png'
import plataforma from '../public/img/ICONS/plataforma.png'
import ps4 from '../public/img/ICONS/ps4.png'
import ps5 from '../public/img/ICONS/ps5.jpg'
import stadia from '../public/img/ICONS/stadia.png'
import tvOS from '../public/img/ICONS/tvOS.png'
import webgl from '../public/img/ICONS/webgl.png'
import windows from '../public/img/ICONS/windows.png'
import xbox from '../public/img/ICONS/xbox.png'
import xs from '../public/img/ICONS/xs.png'

const Logos = () => {
  const LOGOS = [iOS, android, windows, plataforma, linux, webgl,
    ps4, ps5, xbox, xs, oculus, androidtv, tvOS, nintendo, ARCore,
    stadia, holoLens, magicLeap]

  return (

    <div className="logos-container">
      <h1>Ofrece posibilidades increíbles</h1>
      <p>
        Crea tu producto una sola vez e impleméntalo en más de 25 plataformas y
        tecnologías líderes del sector para llegar al mayor público posible.
      </p>
      <div className="logos-grid">
        {
          LOGOS.map((logo, index) => (
            <div key={index.id} className="logo-individual" style={{ backgroundImage: `url(${logo})` }} />
          ))
        }
      </div>
    </div>

  )
}

export default Logos
