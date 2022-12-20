import image__napol from '../images/image__napol.jpg';
import image__podves from '../images/image__podves.jpg';
import image__forma_s from '../images/image__forma_s.jpg';

function Calc() {
  return (
    <section className="calculate">
      <h2 className="calculate__header">Расчёт стоимости изделия на заказ</h2>
      <div className="calculate__box">
        <div className="calculate__fields">
          <div className="calculate__type">
            <div className="calculate__item item">
              <img className="item__image" alt="Изображение" src={image__napol} />
              <p className="item__signed">Напольная</p>
            </div>
            <div className="calculate__item item">
              <img className="item__image" alt="Изображение" src={image__podves} />
              <p className="item__signed">Подвесная</p>
            </div>
            <div className="calculate__item item">
              <img className="item__image" alt="Изображение" src={image__forma_s} />
              <p className="item__signed">Напольная с S-столешницей</p>
            </div>
          </div>
          <div className="calculate__tabletop">

          </div>
          <div className="calculate__cabinet">

          </div>
          <div className="calculate__width">

          </div>
          <div className="calculate__height">

          </div>
        </div>
        <div className="calculate__result">
          <div className="calculate__title">

          </div>
          <div className="calculate__price">

          </div>
          <div className="calculate__delivery">

          </div>
          <div className="calculate__total total">
            <h3>Детали заказа</h3>
            <div className="total__stroke">
              <p>Название изделия:</p>
              <p>Тумба</p>
            </div>
            <div className="total__stroke">
              <p>Скидка</p>
              <p>1000Р</p>
            </div>
            <div className="total__stroke">
              <p>Общая стоимость</p>
              <p>1000Р</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calc;