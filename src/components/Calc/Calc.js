import Type from './components/Type';
import MaterialTable from './components/MaterialTable';
import MaterialTumba from './components/MaterialTumba';
import Input from './components/Input';
import React from 'react';
import { models } from '../../utils/models';
import * as Api from '../../utils/ApiTelegram';

function Calc() {
  const [options, setOptions] = React.useState({
    typeModel: models[0].id,
    tumba: models[0].table[0].price,
    tableTop: models[0].body[0].price,
    length: models[0].sizes.width,
    width: models[0].sizes.depth,
  });

  const [totalPrice, setTotalPrice] = React.useState(0);

  function calculation() {
    const estimate = options.width/100*options.length/100*options.tableTop+((options.length/100-0.65)+1.72)*(options.width/100-0.02)*options.tumba;
    return Math.ceil(estimate).toLocaleString();
  }

  function checkValuesCalculating(element) {
    return element > 0;
  }

  React.useEffect(()=> {
    const booleanStatus = Object.values(options).every(checkValuesCalculating);
    if(booleanStatus) {
      setTotalPrice(calculation());
    } else {
      setTotalPrice(0);
    }
  }, [options]);

  function handleSubmitCalc(e) {
    e.preventDefault();
    let message = String(`<b>Заявка с сайта!</b>%0A`);
    message += String(`<u>Модель изделия: </u>${options.typeModel}%0A`);
    message += String(`<u>Длина изделия: </u>${options.length}%0A`);
    message += String(`<u>Ширина изделия: </u>${options.width}%0A`);
    message += String(`<b>Стоимость заказа: </b>${totalPrice}`);

    return Api.submitForm(String(message))
    .then((data) => {
      if (data) {
        alert('Успешная отправка формы');
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <section className="calculate" id="calculate">
      <p class="models__subtitle">Калькулятор стоимости</p>
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
          <button className="calculate__button" onClick={handleSubmitCalc}>Оформить заказ</button>
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