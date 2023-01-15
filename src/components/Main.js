import React from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import First from './First';
import Models from './Models';
import Calc from './Calc/Calc';
import Oplata from './Oplata';
import About from './About';
import Footer from './Footer';
import PopupCards from './PopupCards';

function Main() {

  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);
  const [isPhotosOpenedPopup, setIsPhotosOpenedPopup] = React.useState(false);
  const [isArrayPhotos, setIsArrayPhotos] = React.useState([]);

  function handlePopupMenuNavigation() {
    setIsNavigationPopup(true);
    addScroll();
  }
  
  function addScroll() {
    document.body.classList.add('scroll');
  }

  function removeScroll() {
    document.body.classList.remove('scroll');
  }

  function closePopup() {
    setIsNavigationPopup(false);
    removeScroll();
  }

  console.log(isArrayPhotos);

  return (
    <div className="page">
      <Header 
        isOpen={handlePopupMenuNavigation}
        isClose={closePopup}
        isNavigation={isNavigationPopup}
      />
      {
        isNavigationPopup && <MobileMenu isClose={closePopup} />
      }
      <main>
        <First />
        <Models 
          addScroll={addScroll}
          removeScroll={removeScroll}
          setIsPhotosPopup={setIsPhotosOpenedPopup}
          setIsArrayPhotos={setIsArrayPhotos}
          isArrayPhotos={isArrayPhotos}
        />
        <Calc />
        <Oplata />
        <About />
      </main>
      <Footer />
      <PopupCards 
        isPhotosPopup={isPhotosOpenedPopup}
        isArrayPhotos={isArrayPhotos}
        setIsArrayPhotos={setIsArrayPhotos}
        setIsPhotosOpenedPopup={setIsPhotosOpenedPopup}
        removeScroll={removeScroll}
      />
    </div>
  );
}

export default Main;