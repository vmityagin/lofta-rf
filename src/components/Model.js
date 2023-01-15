
import React from "react";

function Model({  
  model,  
  addScroll, 
  setIsPhotosPopup,
  setIsArrayPhotos,
  isArrayPhotos,
}) {

  function isOpen() {
    setIsPhotosPopup(true);
    setIsArrayPhotos(model.photos);
    addScroll();
  }

  return (
    <>
      <section className="card">
        <div className="card__elements">
          <img className="card__photo" src={model.url} alt={model.name}/>
          <ul className="card__options">
            <li className="card__option">
              <h3 className="card__name">{model.name}</h3>
            </li>
            <li className="card__option">
              <p className="card__price">{model.price}&thinsp;₽</p>
            </li>
            <li className="card__option">
              <p className="card__sizes">Размеры: </p>
              <div className="card__stroke">
                <div className="card__size">
                  <p className="card__point">Ширина</p>
                  <p className="card__point">{`от ${model.sizes.width} см`}</p>
                </div>
                <div className="card__size">
                  <p className="card__point">Высота</p>
                  <p className="card__point">{`от ${model.sizes.height} см`}</p>
                </div>
                <div className="card__size">
                  <p className="card__point">Глубина</p>
                  <p className="card__point">{`от ${model.sizes.depth} см`}</p>
                </div>
              </div>
            </li>
            <li className="card__option">
              <p className="card__sizes">Материал корпуса: </p>
              <div className="card__stroke">
                {
                  model.body.map((type) => (
                    <div className="card__materials" key={type.id}>
                      <img className="card__material" src={type.url} alt="порода дерева"/>
                      <p className="card__point">{type.wood}</p>
                    </div>
                  ))
                }
              </div>
            </li>
            <li className="card__option">
              <p className="card__sizes">Материал столешницы: </p>
              <div className="card__stroke">
                {
                  model.table.map((type) => (
                    <div className="card__materials" key={type.id}>
                      <img className="card__material" src={type.url} alt="порода дерева"/>
                      <p className="card__point">{type.wood}</p>
                    </div>
                  ))
                }
              </div>
            </li>
          </ul>
          <button className="card__button" onClick={isOpen}>
            Больше фотографий
          </button>
          <p className="card__delivery">{model.delivery}</p>
        </div>
      </section>
    </>
  );
  }

  export default Model;