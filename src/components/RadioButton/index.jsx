import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const RadioButton = ({className, value, isChecked, children, onChange, name}) => {
  return (
    <label className={`${className ? className + ' ' : className}radio-button`}>
      <input
        onChange={onChange}
        className="radio-button__input" 
        type="radio" 
        name={name}
        checked={isChecked}
        value={value}
      />
      <span className="radio-button__label">
        {children}
      </span>
    </label>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string
};

RadioButton.defaultProps = {
  className: '',
  value: '',
  name: '',
  isChecked: false
}

export default RadioButton;