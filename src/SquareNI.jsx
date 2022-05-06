import React from 'react'
import PropTypes from 'prop-types'
import './styles/SquareNI.css'

const SquareNI = ({ title, content }) => (

  <div className="square-NI-container">
    <div className="square-NI-text-container">
      <div className="square-h1-p-container">
        <h1>{title}</h1>
        <p className="mas-content-square">{content}</p>
      </div>
      <div className="mas-informacion-link-container">
        <p className="mas-informacion-square">Más información</p>
      </div>
    </div>
  </div>

)

SquareNI.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default SquareNI
