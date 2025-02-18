import { useState } from 'react';
import logo from '../assets/logo.svg';
import line from '../assets/line.svg';
import tg from '../assets/tg.svg';
import x from '../assets/x.svg';
import screen from '../assets/screen.svg';
import tools from '../assets/tools.svg';
import dot from '../assets/dot.svg';
import create from '../assets/create.png';
import connect from '../assets/connect.png';
import burgerIcon from '../assets/burger.png';
import cross from '../assets/cross.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <img src={line} alt="" className="line hide-700" />
        {/* Для десктопа показываем полный блок */}
        <div className="header__full-menu">
          
          <div className="networks">
            <a href="#" className="_scale_hover">
              <img src={tg} alt="Telegram" />
            </a>
            <a href="#" className="_scale_hover">
              <img src={x} alt="X" />
            </a>
            <a href="#" className="_scale_hover">
              <img src={screen} alt="Screen" />
            </a>
            <a href="#" className="_scale_hover">
              <img src={tools} alt="Tools" />
            </a>
          </div>

        </div>
        <img src={line} alt="" className="line hide-700" />
        {/* Бургер показывается на мобильных */}
        <div className="burger-container">
          <img
            src={burgerIcon}
            alt="Burger Menu"
            className="burger _scale_hover"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      <nav className="menu header__full-menu">
        <a href="#gallery" className="menu__link _scale_hover">Gallery</a>
        <img src={dot} alt="Dot" className="dot" />
        <a href="#app" className="menu__link _scale_hover">App</a>
        <img src={dot} alt="Dot" className="dot" />
        <a href="#roadmap" className="menu__link _scale_hover">Roadmap</a>
        <img src={dot} alt="Dot" className="dot" />
        <a href="#feedback" className="menu__link _scale_hover">Feedback</a>
        <img src={dot} alt="Dot" className="dot" />
        <a href="#faq" className="menu__link _scale_hover">FAQ</a>
      </nav>
      <div className="header__right header__full-menu">
        <a href='#app'><img src={create} alt="Create" className="create _scale_hover" /></a>
        <img src={line} alt="" className="line" />
        <img src={connect} alt="Connect" className="connect _scale_hover" />
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
         <div className="mobile-menu__top">
            <img src={logo} alt="Logo" className="logo" />
            <img onClick={toggleMobileMenu} src={cross} alt="Cross" className="cross" />
         </div>
          <nav className=" menu">
            <a href="#gallery" className="mobile-menu__link menu__link _scale_hover">Gallery</a>
            <a href="#app" className="mobile-menu__link menu__link _scale_hover">App</a>
            <a href="#roadmap" className="mobile-menu__link menu__link _scale_hover">Roadmap</a>
            <a href="#feedback" className="mobile-menu__link menu__link _scale_hover">Feedback</a>
            <a href="#faq" className="mobile-menu__link menu__link _scale_hover">FAQ</a>
          </nav>
          <div className="mobile-menu__networks">
            <a href="#" className="_scale_hover">
              <img src={tg} alt="Telegram" />
            </a>
            <a href="#" className="_scale_hover">
              <img src={x} alt="X" />
            </a>
            <a href="#" className="_scale_hover">
              <img src={screen} alt="Screen" />
            </a>
            <a href="#" className="_scale_hover">
              <img src={tools} alt="Tools" />
            </a>
          </div>
          <div className="mobile-menu__right">
            <img src={create} alt="Create" className="create _scale_hover" />
            <img src={connect} alt="Connect" className="connect _scale_hover" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
