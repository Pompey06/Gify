import { useState } from "react";
import logo from "../assets/logo.svg";
import line from "../assets/line.svg";
import tg from "../assets/tg.svg";
import x from "../assets/x.svg";
import screen from "../assets/screen.svg";
import tools from "../assets/tools.svg";
import dot from "../assets/dot.svg";
import burgerIcon from "../assets/burger.png";
import cross from "../assets/cross.png";
import connect_svg from "../assets/connect.svg";
import create_svg from "../assets/create.svg";
import AnimationWrap from "./AnimationWrap";

const NetworkItem = ({ href, src, delay, className }) => {
  return (
    <AnimationWrap noAnimate delay={delay} className={className}>
      <a href={href} className="_scale_hover">
        <img src={src} alt={src} />
      </a>
    </AnimationWrap>
  );
};

const MenuItem = ({ href, text, delay, className, isShowDot = true }) => {
  return (
    <>
      <AnimationWrap
        noAnimate
        delay={delay}
        className={"menu__link " + className}
      >
        <a href={href} className="_scale_hover">
          {text}
        </a>
      </AnimationWrap>
      {isShowDot && (
        <AnimationWrap
          noAnimate
          delay={delay + 0.3}
          className="animation__scale_big dot-wrap"
        >
          <img src={dot} alt="Dot" className="dot" />
        </AnimationWrap>
      )}
    </>
  );
};
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__left">
        <AnimationWrap noAnimate className="logo animation__left_t">
          <img src={logo} alt="Logo" />
        </AnimationWrap>
        <AnimationWrap noAnimate className="animation__scale_big" delay={1}>
          <img src={line} alt="" className="line hide-700" />
        </AnimationWrap>
        {/* Для десктопа показываем полный блок */}
        <div className="header__full-menu">
          <div className="networks">
            <NetworkItem
              href="#"
              src={tg}
              delay={0.5}
              className="animation__top"
            />
            <NetworkItem
              href="#"
              src={x}
              delay={0.7}
              className="animation__bottom"
            />
            <NetworkItem
              href="#"
              src={screen}
              delay={0.9}
              className="animation__top"
            />
            <NetworkItem
              href="#"
              src={tools}
              delay={1.1}
              className="animation__bottom"
            />
          </div>
        </div>
        <AnimationWrap noAnimate className="animation__scale_big" delay={1}>
          <img src={line} alt="" className="line hide-700" />
        </AnimationWrap>
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
        <MenuItem
          href="#gallery"
          text="Gallery"
          delay={0.5}
          className="animation__bottom_t"
        />
        <MenuItem
          href="#app"
          text="App"
          delay={0.7}
          className="animation__top_t"
        />
        <MenuItem
          href="#roadmap"
          text="Roadmap"
          delay={0.9}
          className="animation__bottom_t"
        />
        <MenuItem
          href="#feedback"
          text="Feedback"
          delay={1.1}
          className="animation__top_t"
        />
        <MenuItem
          href="#faq"
          text="FAQ"
          delay={1.3}
          isShowDot={false}
          className="animation__bottom_t"
        />
      </nav>
      <div className="header__right header__full-menu">
        <AnimationWrap noAnimate className="animation__top_t" delay={1.2}>
          <a href="#app">
            <button className="create _scale_hover button white__button">
              <img src={create_svg} alt="" /> Create video
            </button>
          </a>
        </AnimationWrap>
        <AnimationWrap noAnimate className="animation__scale_big" delay={1}>
          <img src={line} alt="" className="line" />
        </AnimationWrap>
        <AnimationWrap noAnimate className="animation__right_t" delay={1.2}>
          <button className="connect _scale_hover button black__button">
            <img src={connect_svg} alt="" /> Connect wallet
          </button>
        </AnimationWrap>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__top">
            <img src={logo} alt="Logo" className="logo" />
            <img
              onClick={toggleMobileMenu}
              src={cross}
              alt="Cross"
              className="cross"
            />
          </div>
          <nav className=" menu">
            <a
              href="#gallery"
              className="mobile-menu__link menu__link _scale_hover"
            >
              Gallery
            </a>
            <a
              href="#app"
              className="mobile-menu__link menu__link _scale_hover"
            >
              App
            </a>
            <a
              href="#roadmap"
              className="mobile-menu__link menu__link _scale_hover"
            >
              Roadmap
            </a>
            <a
              href="#feedback"
              className="mobile-menu__link menu__link _scale_hover"
            >
              Feedback
            </a>
            <a
              href="#faq"
              className="mobile-menu__link menu__link _scale_hover"
            >
              FAQ
            </a>
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
            <a href="#app">
              <button className="create _scale_hover button white__button">
                <img src={create_svg} alt="" /> Create video
              </button>
            </a>
            <button className="connect _scale_hover button black__button">
              <img src={connect_svg} alt="" /> Connect wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
