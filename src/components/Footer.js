import React from "react";

function Footer() {

  const [year, setYear] = React.useState(0);
    function getYearNow() {
      const year = new Date();
      setYear(year.getFullYear());
    }

    React.useEffect(() => {
      getYearNow();
    },[])

    return (
      <footer className="footer">
        <p className="footer__text">©{year}. Магазин деревянной лофт мебели - Lofta</p>
      </footer>
    );
  }

  export default Footer;