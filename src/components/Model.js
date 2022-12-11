import card__photo from '../images/card__photo.png';
import card__material from '../images/card__material.jpg';

function Model() {
  return (
    <section className="card">
      <div className="card__elements">
        <img className="card__photo" src={card__photo} alt="Тумба с деревянной столешницей из дуба"/>
        <ul className="card__options">
          <li className="card__option">
            <h3 className="card__name">Напольная тумба</h3>
          </li>
          <li className="card__option">
            <p className="card__price">13 990&thinsp;₽</p>
          </li>
          <li className="card__option">
            <p className="card__sizes">Размеры: </p>
            <div className="card__stroke">
              <div className="card__size">
                <p className="card__point">Ширина</p>
                <p className="card__point">100 см</p>
              </div>
              <div className="card__size">
                <p className="card__point">Высота</p>
                <p className="card__point">50 см</p>
              </div>
              <div className="card__size">
                <p className="card__point">Глубина</p>
                <p className="card__point">80 см</p>
              </div>
            </div>
          </li>
          <li className="card__option">
            <p className="card__sizes">Материал корпуса: </p>
            <div className="card__stroke">
              <div className="card__materials">
                <img className="card__material" src={card__material} alt="порода дерева"/>
                <p className="card__point">Берёза</p>
              </div>
              <div className="card__materials">
                <img className="card__material" src={card__material} alt="порода дерева"/>
                <p className="card__point">Берёза</p>
              </div>
              <div className="card__materials">
                <img className="card__material" src={card__material} alt="порода дерева"/>
                <p className="card__point">Берёза</p>
              </div>
            </div>
          </li>
          <li className="card__option">
            <p className="card__sizes">Материал столешницы: </p>
            <div className="card__stroke">
              <div className="card__materials">
                <img className="card__material" src={card__material} alt="порода дерева"/>
                <p className="card__point">Берёза</p>
              </div>
              <div className="card__materials">
                <img className="card__material" src={card__material} alt="порода дерева"/>
                <p className="card__point">Берёза</p>
              </div>
              <div className="card__materials">
                <img className="card__material" src={card__material} alt="порода дерева"/>
                <p className="card__point">Берёза</p>
              </div>
            </div>
          </li>
        </ul>
        <button className="card__button">
          В корзину
        </button>
        <p className="card__delivery">Отгрузка со склада в Москве N дней</p>
      </div>
    </section>
  );
  }

  export default Model;