import React from "react";
import Slider from "react-slick";
import cross from '../images/header__cross.svg';

function PopupCards({setIsPhotosPopup, isPhotosPopup, removeScroll, isPhotos}) {

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
    setIsPhotosPopup(false);
    removeScroll();
  }

  console.log(isPhotos);

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
            isPhotos.map((path, index) => (
              <div key={Math.random()}>
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