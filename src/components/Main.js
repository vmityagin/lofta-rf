import React from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import First from './First';
import Models from './Models';
import Calc from './Calc/Calc';
import Oplata from './Oplata';
import About from './About';
import Footer from './Footer';
import PopupCards from './PopupCards'

function Main() {

  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);
  const [isPhotosPopup, setIsPhotosPopup] = React.useState(false);
  const [isPhotos, setIsPhotos] = React.useState([]);

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
          setIsPhotosPopup={setIsPhotosPopup}
          setIsPhotos={setIsPhotos}
        />
        <Calc />
        <Oplata />
        <About />
      </main>
      <Footer />
      <PopupCards 
        setIsPhotosPopup={setIsPhotosPopup}
        isPhotosPopup={isPhotosPopup}
        removeScroll={removeScroll}
        isPhotos={isPhotos}
      />
    </div>
  );
}

export default Main;