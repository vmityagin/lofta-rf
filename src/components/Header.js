import React from 'react';

import header__logo from '../images/header__logo.png';
import info__mobile from '../images/info__mobile.svg';
import info__clock from '../images/info__clock.svg';
import info__location from '../images/info__location.svg';
import info__organization from '../images/info__organization.svg';
import nav__hamburger from '../images/nav__hamburger.svg';
import header__cross from '../images/header__cross.svg';

function Header({ isOpen, isClose, isNavigation }) {

  const handleClickScroll = (element) => {
    const box = document.getElementById(element);
    if (box) {
      // 👇 Will scroll smoothly to the top of the next section
      box.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phone = "tel:+79172134928";
  return (
    <header className="header">
      <div className="header__fl">
        <img className="header__logo" src={header__logo} alt="логотип лофта рф"/>
        <div>
          {
            isNavigation ?
            <img
              onClick={isClose} 
              src={header__cross} 
              className="nav__hamburger" 
              alt="иконка закрытия меню" 
            />
            :
            <img
              onClick={isOpen} 
              src={nav__hamburger} 
              className="nav__hamburger" 
              alt="иконка мобильного меню" 
            />
          }
        </div>
        <div className="header__navigation">
          <div className="header__info">
            <ul className="info">
              <li className="info__item">
                <img src={info__mobile} className="info__icon" alt="иконка телефона" />
                <a className="info__text" href={phone} target="_blank" rel="noreferrer" >+7 (917) 213-49-28</a>
              </li>
              <li className="info__item">
                <img src={info__clock} className="info__icon" alt="циферблат иконка" />
                <p className="info__text">Пн-Пт 12:00 - 00:00</p>
              </li>
              <li className="info__item">
                <img src={info__organization} className="info__icon" alt="иконка ип"/>
                <p className="info__text">ИП Пересветов К.Е.</p>
              </li>
              <li className="info__item">
                <img src={info__location} className="info__icon" alt="иконка ип"/>
                <p className="info__text">Саратов</p>
              </li>
            </ul>
          </div>
          <nav className="header__nav">
            <ul className="nav">
              <li className="nav__item" onClick={() => handleClickScroll('first')}>
                <p className="nav__link">Главная</p>
              </li>
              <li className="nav__item" onClick={() => handleClickScroll('models')}>
                <p className="nav__link">Модельный ряд</p>
              </li>
              <li className="nav__item" onClick={() => handleClickScroll('calculate')}>
                <p className="nav__link">Калькулятор</p>
              </li>
              <li className="nav__item" onClick={() => handleClickScroll('srok')}>
                <p className="nav__link">Сроки</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
  }

  export default Header;