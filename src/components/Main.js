import React from 'react';
import Header from './Header';
import First from './First';
import Models from './Models';
import Calc from './Calc/Calc';
import Oplata from './Oplata';
import About from './About';
import Footer from './Footer';

function Main() {
  return (
    <div className="page">
      <Header />
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