import React from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import First from './First';
import Models from './Models';
import Calc from './Calc/Calc';
import Oplata from './Oplata';
import About from './About';
import Footer from './Footer';

function Main() {

  const [isNavigationPopup, setIsNavigationPopup] = React.useState(false);

  function handlePopupMenuNavigation() {
    setIsNavigationPopup(true);
    document.body.classList.add('scroll');
  }

  function closePopup() {
    setIsNavigationPopup(false);
    document.body.classList.remove('scroll');
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
        <Models />
        <Calc />
        <Oplata />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default Main;