import React from 'react'
import { connect } from 'react-redux'
import './index.scss'

const SlidingUnderline = ({ className, el }) => {
  let width = 0;
  let x = 0;

  if (el) {
    width = el.offsetWidth;
    x = el.offsetLeft;
  }
  
  return (
    <div 
      className={`${className ? className + ' ' : className}sliding-underline`}
      style={{
        width,
        transform: `translateX(${x}px)`
      }}
    > 
    </div>
  )
}

SlidingUnderline.defaultProps = {
  className: ''
}

const mapStateToProps = (state) => ({
  currentLanguage: state.language
})

export default connect(mapStateToProps)(SlidingUnderline)
