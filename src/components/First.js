import first__image from '../images/first__image.png';

function First() {
  return (
    <section className="first">
      <div className="first__text">
        <h1 className="first__header">Тумба со столешницей из дерева</h1>
        <p className="first__subtitle">
          Создаем прочные изделия, на которых можно сидеть, стоять, прыгать, лежать – они всё равно сохранят свою форму.
        </p>
        <p className="first__price">от 6 500 рублей</p>
        <p className="first__subtitle">с доставкой до квартиры за 0 рублей</p>
      </div>
      <img className="first__image" src={first__image} alt="Деревянна тумба для ванной"/>
    </section>
  );
  }

  export default First;