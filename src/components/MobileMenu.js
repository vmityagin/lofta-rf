import React from 'react';

function MobileMenu({ isClose }) {

  const handleClickScroll = (element) => {
    const box = document.getElementById(element);
    if (box) {
      // 👇 Will scroll smoothly to the top of the next section
      box.scrollIntoView({ behavior: 'smooth' });
      isClose();
    }
  };

  const phone = "tel:+79172134928";
  return (
    <section className="sidebar">
       <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item" onClick={() => handleClickScroll('first')}>
            <p className="sidebar__text">Главная</p>
          </li>
          <li className="sidebar__item" onClick={() => handleClickScroll('models')}>
            <p className="sidebar__text">Модельный ряд</p>
          </li>
          <li className="sidebar__item" onClick={() => handleClickScroll('calculate')}>
            <p className="sidebar__text">Калькулятор</p>
          </li>
          <li className="sidebar__item" onClick={() => handleClickScroll('srok')}>
            <p className="sidebar__text">Сроки</p>
          </li>
        </ul>
      </nav>
      <div className="sidebar__info">
        <ul className="sidebar__footer">
          <li className="sidebar__point">
            <a className="sidebar__text" href={phone} target="_blank" rel="noreferrer" >+7 (917) 213-49-28</a>
          </li>
          <li className="sidebar__point">
            <p className="sidebar__text">Пн-Пт 12:00 - 00:00</p>
          </li>
          <li className="sidebar__point">
            <p className="sidebar__text">ИП Пересветов К.Е.</p>
          </li>
          <li className="sidebar__point">
            <p className="sidebar__text">Саратов</p>
          </li>
        </ul>
      </div>
    </section>
  );
  }

  export default MobileMenu;