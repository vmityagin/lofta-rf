import React from 'react';
import Header from './Header';
import First from './First';
import Models from './Models';
import Footer from './Footer';

function Main({ loggedIn, isOpen }) {
  return (
    <div className="page">
      <Header />
      <main>
        <First />
        <Models />
      </main>
      <Footer />
    </div>
  );
  }

  export default Main;