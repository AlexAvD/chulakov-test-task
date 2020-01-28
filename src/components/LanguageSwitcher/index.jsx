import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLanguageAction } from '../../redux/actoins/languageActions'
import { languages } from '../../locales';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import './index.scss';

const LanguageSwitcher = ({ currentLanguage, setLanguage }) => {
  const onChange = (e) => {
    setLanguage(e.target.value);
  };

  const radioButtons = languages.map(language => {
    return (
      <RadioButton
        key={language.code}
        isChecked={currentLanguage === language.code} 
        value={language.code}
        name="language" 
      >
        {language.name} 
      </RadioButton>
    )
  });

  return (
    <div className="language-switcher">
      <RadioButtonGroup onChange={onChange} >
        {radioButtons}
      </RadioButtonGroup>
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