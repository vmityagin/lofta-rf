import React from "react";
import Slider from "react-slick";
import cross from '../images/header__cross.svg';

function PopupCards({
  isPhotosPopup,
  isArrayPhotos,
  setIsArrayPhotos,
  setIsPhotosOpenedPopup,
  removeScroll,
}) {

  const [settings, setSettings] = React.useState({
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 10,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          dots: false,
          arrows: false,
        }
      },
    ],
  })

  function isClose() {
    setIsArrayPhotos([...isArrayPhotos.slice(0, isArrayPhotos.length), ...isArrayPhotos.slice(isArrayPhotos.length + 1)]);
    setIsPhotosOpenedPopup(false);
    removeScroll();
  }

  console.log(isArrayPhotos);

  return (
    <section className={`photos ${isPhotosPopup ? 'photos_active' : ''}`}>
      <div className="photos__box">
        <img 
          className="photos__cross" 
          src={cross} 
          alt="Иконка крестика" 
          onClick={isClose}
        />
        <Slider {...settings}>
          {
            isArrayPhotos.map((path) => (
              <div key={isArrayPhotos.id}>
                <img src={path} className="photos__image" />
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  );
  }

  export default PopupCards;