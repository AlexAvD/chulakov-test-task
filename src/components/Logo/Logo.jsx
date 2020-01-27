import React from 'react';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <a className="logo__link" href="/">
        <span className="logo__title">chulakov</span>
        <span className="logo__subtitle">-- Test Task --</span>
      </a>
    </div>
  )
};

export default Logo;