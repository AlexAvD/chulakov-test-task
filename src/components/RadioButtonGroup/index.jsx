import React, { useState, useEffect, useRef } from 'react'
import SlidingUnderline from '../SlidingUnderline'
import './index.scss'

const RadioButtonGroup = ({ children, onChange }) => {
  const [ underlinedEl, setUnderlinedEl ] = useState(null);
  const radioButtonGroupEl = useRef(null);

  const getUnderlinedEl = () => {
    return radioButtonGroupEl.current.querySelector('.radio-button__input:checked ~ .radio-button__label');
  }

  useEffect(() => {
    setUnderlinedEl(getUnderlinedEl());
  }, []);

  const radioButtons = React.Children.map(children, (child) => {
    return (
      <child.type {...child.props} onChange={
          (e) => {
            if (child.onChange) {
              child.onChange(e);
            } else if (onChange) {
              onChange(e);
            }

            setUnderlinedEl(getUnderlinedEl());
          }
        }
      />
    )
  })

  return (
    <div className="radio-button-group" ref={radioButtonGroupEl}>
      {radioButtons}

      <SlidingUnderline el={underlinedEl} />
    </div>
  )
}

export default RadioButtonGroup
