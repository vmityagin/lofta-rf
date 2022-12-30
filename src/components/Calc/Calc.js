import Type from './components/Type';
import MaterialTable from './components/MaterialTable';
import MaterialTumba from './components/MaterialTumba';
import Input from './components/Input';
import React from 'react';

function Calc() {
  const [options, setOptions] = React.useState({
    typeModel: '',
    tumba: 0,
    tableTop: 0,
    length: 0,
    width: 0,
  });

  console.log(options);

  const [totalPrice, setTotalPrice] = React.useState(0);

  function calculation() {
    const estimate = options.width/100*options.length/100*options.tableTop+((options.length/100-0.65)+1.72)*(options.width/100-0.02)*options.tumba;
    console.log(Math.ceil(estimate));
    return Math.ceil(estimate);
  }

  React.useEffect(()=> {
    setTotalPrice(calculation());
  }, [options]);

  return (
    <section className="calculate">
      <h2 className="calculate__header">Расчёт стоимости изделия на заказ</h2>
      <div className="calculate__box">
        <div className="calculate__fields">
          <p className="calculate__text">1. Выберите форму тумбы</p>
          <Type 
            setOptions={setOptions}
            options={options}
          />
          <p className="calculate__text">2. Выберите материал столешницы</p>
          <MaterialTable 
            setOptions={setOptions}
            options={options}
          />
          <p className="calculate__text">3. Выберите материал тумбы</p>
          <MaterialTumba 
            setOptions={setOptions}
            options={options}
          />
          <p className="calculate__text">4. Укажите длину, cм</p>
          <Input
            typeInput={'length'}
            placeHolder='Введите длину в см от 50 до 300'
            max={300}
            min={50}
            label='Ширина'
            setOptions={setOptions}
            options={options}
          />
          <p className="calculate__text">5. Укажите ширину, cм</p>
          <Input
            typeInput={'width'}
            placeHolder='Введите ширину в см от 30 до 60'
            max={60}
            min={30}
            label='Глубина'
            setOptions={setOptions}
            options={options}
          />
        </div>
        <div className="calculate__result">
          <button className="calculate__button">Оформить заказ</button>
          <div className="calculate__total total">
            <h3 className="total__header">Детали заказа</h3>
            <div className="total__stroke">
              <p>Доставка</p>
              <p className="total__options">Бесплатно</p>
            </div>
            <div className="total__final">
              <p className="total__summary">Итого</p>
              <p className="total__finprice">{totalPrice} ₽</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calc;