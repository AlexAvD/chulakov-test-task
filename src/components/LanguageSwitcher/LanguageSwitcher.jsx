import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLanguageAction } from '../../redux/actoins/languageActions'
import RadioButton from '../RadioButton/RadioButton';
import { languages } from '../../locales';
import './LanguageSwitcher.scss';

const LanguageSwitcher = ({ currentLanguage, setLanguage }) => {
  const [ underlineStyles, setUnderlineStyles ] = useState({width: 0, transform: 0})
  const defaultLang = useRef(null);

  useEffect(() => {
    const { offsetLeft, offsetWidth } = defaultLang.current;

    setUnderlineStyles({
      width: offsetWidth,
      transform: `translateX(${offsetLeft}px)`
    });

  }, []);

  const onChange = (e) => {
    setLanguage(e.target.value);

    const parent = e.target.closest('.radio-button');
    const { offsetLeft, offsetWidth } = parent;

    setUnderlineStyles({
      width: offsetWidth,
      transform: `translateX(${offsetLeft}px)`
    });
  };

  const radioButtons = languages.map(language => {
    return (
      <RadioButton 
        key={language.code}
        className="language-switcher__radio-button" 
        isChecked={currentLanguage === language.code} 
        onChange={onChange}
        label={language.name}
        value={language.code}
        name="language" 
        ref={currentLanguage === language.code ? defaultLang : null} 
      />
    )
  });

  return (
    <div className="language-switcher">
      <div className="language-switcher__group">
        {radioButtons}
        <div style={underlineStyles} className="language-switcher__underline"></div>
      </div>
    </div>
  )
};

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentLanguage: state.language
})

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => {
    dispatch(setLanguageAction(language))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);