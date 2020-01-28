import React from 'react'
import { ReactComponent as Star } from '../../../images/star.svg'
import './index.scss'

const Favourite = ({ isChecked, onChange }) => {
  return (
    <div className="contact__favourite favourite">
      <div className="favourite__container">
        <input 
          className="favourite__input"
          onChange={onChange}
          type="checkbox" 
          checked={isChecked}
        />
        <Star className="favourite__star" />
      </div>
    </div>
  )
}

export default Favourite
