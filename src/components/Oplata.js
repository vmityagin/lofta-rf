import React from "react";
import icon__site from "../images/icon__site.svg";
import icon__callcenter from "../images/icon__callcenter.svg";
import icon__dogovor from "../images/icon__dogovor.svg";
import icon__package from "../images/icon__package.svg";
import icon__delivery from "../images/icon__delivery.svg";

function Oplata() {
  return (
    <section className="payment" id="srok">
      <p class="models__subtitle">Формат оплаты</p>
      <h2 className="calculate__header">Как осуществляется оплата и доставка?</h2>
      <ul className="payment__steps">
        <li className="payment__step">
          <img className="payment__icon" src={icon__site} alt="Иконка сайта" />
          <h3 className="payment__title">1. Оставьте заявку</h3>
          <p className="payment__text">Оставьте заявку на сайте, собрав свое изделие в Калькуляторе стоимости</p>
        </li>
        <li className="payment__step">
          <img className="payment__icon" src={icon__callcenter} alt="Иконка колцентра" />
          <h3 className="payment__title">2. Мы свяжемся с вами</h3>
          <p className="payment__text">Мы перезвоним вам и уточним детали заказа. Зададим необходимые вопросы и согласуем сроки доставки.</p>
        </li>
        <li className="payment__step">
          <img className="payment__icon" src={icon__dogovor} alt="Иконка колцентра" />
          <h3 className="payment__title">3. Отправим договор</h3>
          <p className="payment__text">Мы отправим вам договор с предоплатой 50%, зафиксируем характеристики, стоимость и сроки.</p>
        </li>
        <li className="payment__step">
          <img className="payment__icon" src={icon__package} alt="Иконка колцентра" />
          <h3 className="payment__title">4. Упакуем и отправим товар</h3>
          <p className="payment__text">Оплата второй половины 50% в день отправки товара.</p>
        </li>
        <li className="payment__step">
          <img className="payment__icon" src={icon__delivery} alt="Иконка колцентра" />
          <h3 className="payment__title">5. Доставим до квартиры</h3>
          <p className="payment__text">После полной оплаты 100% изделие доедет до вашей квартиры в согласованный срок.</p>
        </li>
      </ul>
    </section>
  );
  }

  export default Oplata;