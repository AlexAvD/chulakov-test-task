import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './RadioButton.scss';

const RadioButton = forwardRef(({className, value, isChecked, label, onChange, name}, ref) => {
  return (
    <label className={`${className ? className + ' ' : className}radio-button`} ref={ref}>
      <input
        onChange={onChange}
        className="radio-button__input" 
        type="radio" 
        name={name}
        checked={isChecked}
        value={value}
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
});

RadioButton.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string
};

RadioButton.defaultProps = {
  className: '',
  value: '',
  label: '',
  name: '',
  isChecked: false
}

export default RadioButton;