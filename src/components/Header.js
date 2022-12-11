import header__logo from '../images/header__logo.png';
import info__mobile from '../images/info__mobile.svg';
import info__clock from '../images/info__clock.svg';
import info__location from '../images/info__location.svg';
import info__organization from '../images/info__organization.svg';
import nav__hamburger from '../images/nav__hamburger.svg';

import header__whatsapp from '../images/header__whatsapp.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__fl">
        <img className="header__logo" src={header__logo} alt="логотип лофта рф"/>
        <div>
          <img src={nav__hamburger} className="nav__hamburger" alt="иконка мобильного меню" />
        </div>
        <div className="header__navigation">
          <div className="header__info">
            <ul className="info">
              <li className="info__item">
                <img src={info__mobile} className="info__icon" alt="иконка телефона" />
                <p className="info__text" >+7 (917) 213-49-28</p>
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
              <li className="nav__item">
                <Link className="nav__link">Главная</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link">Модельный ряд</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link">Калькулятор</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link">Сроки</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
  }

  export default Header;