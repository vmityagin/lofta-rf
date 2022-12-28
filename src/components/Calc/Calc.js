import Type from './components/Type';
import MaterialTable from './components/MaterialTable';
import MaterialTumba from './components/MaterialTumba';
import Input from './components/Input';

function Calc() {
  return (
    <section className="calculate">
      <h2 className="calculate__header">Расчёт стоимости изделия на заказ</h2>
      <div className="calculate__box">
        <div className="calculate__fields">
          <p className="calculate__text">1. Выберите длину ниши, м</p>
          <Type />
          <p className="calculate__text">2. Выберите длину ниши, м</p>
          <MaterialTable />
          <p className="calculate__text">3. Выберите длину ниши, м</p>
          <MaterialTumba />
          <p className="calculate__text">4. Выберите длину ниши, м</p>
          <Input
            type={'width'}
          />
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