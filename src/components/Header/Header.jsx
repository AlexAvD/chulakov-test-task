import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import './Header.scss';


const Header = () => {
  return (
    <header className="header">
      <div className="header__top header-top">
        <div className="header-top__container container">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="header__main header-main">
        <div className="header-main__container container">
          <Logo />
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header;
