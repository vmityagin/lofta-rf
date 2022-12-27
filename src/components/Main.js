import React from 'react';
import Header from './Header';
import First from './First';
import Models from './Models';
import Calc from './Calc/Calc';
import Footer from './Footer';

function Main() {
  return (
    <div className="page">
      <Header />
      <main>
        <First />
        <Models />
        <Calc />
      </main>
      <Footer />
    </div>
  );
}

export default Main;