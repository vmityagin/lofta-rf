import Type from './components/Type';
import MaterialTable from './components/MaterialTable';
import MaterialTumba from './components/MaterialTumba';

function Calc() {
  return (
    <section className="calculate">
      <h2 className="calculate__header">Расчёт стоимости изделия на заказ</h2>
      <div className="calculate__box">
        <div className="calculate__fields">
          <Type />
          <MaterialTable />
          <MaterialTumba />
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
              <p>Доставка</p>
              <p>1000Р</p>
            </div>
            <div className="total__stroke">
              <p>Сборка</p>
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