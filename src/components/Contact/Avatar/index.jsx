import React from 'react'
import PropTypes from 'prop-types' 
import cat      from '../../../images/avatars/cat.svg'
import dog      from '../../../images/avatars/dog.svg'
import fox      from '../../../images/avatars/fox.svg'
import koala    from '../../../images/avatars/koala.svg'
import lion    from '../../../images/avatars/lion.svg'
import owl      from '../../../images/avatars/owl.svg'
import penguin  from '../../../images/avatars/penguin.svg'
import pig      from '../../../images/avatars/pig.svg'
import raccoon  from '../../../images/avatars/raccoon.svg'
import sheep    from '../../../images/avatars/sheep.svg'
import react    from '../../../images/avatars/react.svg'
import './index.scss'

const avatars = {
  cat,
  dog,
  fox,
  koala,
  lion,
  owl,
  penguin,
  pig,
  raccoon,
  sheep,
  react
}

const pickAvatar = (name) => {
  return avatars[name] || avatars['react'];
}

const Avatar = ({ name, alt }) => {
  return (
    <div className="contact__avatar avatar">
      <div className="avatar__container">
        <img 
          className="avatar__image" 
          src={pickAvatar(name)} 
          alt={alt} 
        />
      </div>
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string
}

Avatar.defaultProps = {
  name: 'react',
  alt: ''
}

export default Avatar
