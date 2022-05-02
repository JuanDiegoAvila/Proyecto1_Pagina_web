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
      <p className="mas-informacion-link-container">
        <p className="mas-informacion-square">Más información</p>
      </p>
    </div>
  </div>

)

SquareNI.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default SquareNI
