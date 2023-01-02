import React from "react";
import kirill__photo from '../images/kirill_photo.jpg';

function About() {
  return (
    <section className="about">
      <p class="models__subtitle">О нас</p>
      <h2 className="calculate__header">Кто мы и как создаем мебель</h2>
      <div className="about__box">
        <div className="about__image">
          <img className="about__photo" src={kirill__photo} alt="ИП Пересветов К.Е."/>
          <p className="about__name">Кирилл Пересветов</p>
          <p className="about__position">Руководитель мебельного производства в Саратовской области</p>
        </div>
        <div className="about__text">
          <h3 className="about__title">Наше производство</h3>
          <p className="about__subtitle">Мы - российское производство. Начали свой путь в Саратовской области в 2016 году. Начинали с небольшого производство в малых мощностях. Сейчас мы имеем полностаночную базу для выполнения сложнейших заказов. Только в этому году мы расширили площади производства до 320м&sup2; и планируем расти дальше.</p>
          <h3 className="about__title">Наши преимущества</h3>
          <p className="about__subtitle">У нас работают специалисты со стажем более 20 лет
За время работы на рынке мы сохранили конкурентные цены от поставщиков сырья. Это позволяет нам предоставлять качественное изделие по рыночной цене. Мы не тратим деньги на телевизионную рекламу и другие виды рекламы широкого охвата. Эти затраты также не входят в стоимость изделия, что позволяет нам держать цены комфортными и доступными для потребителей</p>
        </div>
      </div>

    </section>
  );
  }

  export default About;