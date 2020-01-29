import React from 'react'
import PropTypes from 'prop-types' 
import store from '../../redux/store'
import { connect } from 'react-redux'
import { setFavouriteAction } from '../../redux/actoins/dataActions'
import { translate } from '../../locales'
import classnames from 'classnames'
import Avatar from './Avatar'
import Favourite from './Favourite'
import Video from './Video'
import './index.scss'

const getCorrectAgeSpelling = (spellings, age) => {
  if (typeof spellings === 'string') {
    return spellings;
  }

  let result;
  let count = age % 100;
 
	if (count >= 5 && count <= 20) {
		result = spellings[0];
	} else {
		count = count % 10;
		if (count === 1) {
			result = spellings[1];
		} else if (count >= 2 && count <= 4) {
			result = spellings[2];
    } else {
      result = spellings[0];
    }
  }
  
  return result;
}

const Contact = ({ id, image, name, age, phone, phrase, favourite, video, currentLanguage, className }) => {
  const handleChange = (id) => () => {
    store.dispatch(setFavouriteAction(id))
  }

  const contactClasses = classnames('contact', className, {
    'contact--video': video,
  })

  return (
    <li className={contactClasses} data-id={id}>
      <div className="contact__inner">
        <div className="contact__info">
          <div className="contact__info-group">
            <Avatar name={image} alt={name} />

            <div className="contact__name">
              <span className="contact__name-text">
                {name}
              </span>
            </div>
          </div>

          <div className="contact__age">
            <span className="contact__age-text">
              {age} {getCorrectAgeSpelling(translate(currentLanguage, 'years'), age)}
            </span> 
          </div>

          <div className="contact__phone">
            <span className="contact__phone-text">
              {phone}
            </span>
          </div>

          <div className="contact__phrase">
            <span className="contact__phrase-text">
              {phrase}
            </span>
          </div> 

          <Favourite isChecked={favourite} onChange={handleChange(id)} />
          
        </div>

        { video && (
          <Video name={video} /> 
        )}
      </div>
    </li>
  )
}

Contact.propTypes = {
  id: PropTypes.number.isRequired,
	favourite: PropTypes.bool,
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	phone: PropTypes.string.isRequired,
	image: PropTypes.string,
	phrase: PropTypes.string,
	video: PropTypes.string,
}

const mapStateToProps = (state) => ({
  currentLanguage: state.language
})

export default connect(mapStateToProps)(Contact)
