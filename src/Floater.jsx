import React from 'react'
import url from '../public/img/floater.png'
import './styles/Floater.css'

const Floater = () => (
  <div className="floater-container" style={{ backgroundImage: `url(${url})` }} />
)
export default Floater
