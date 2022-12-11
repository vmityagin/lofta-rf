import Model from './Model';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

function Models() {
  return (
    <section className="models">
      <p className="models__subtitle">Модельный ряд</p>
      <h2 className="models__title">Тумбы</h2>
      <Splide
        className="splide"
        hasTrack={ false }
        options={ {
          type: 'slide',
          pagination: false,
          perPage: 3,
          arrows: true,
          breakpoints: {
            768: {
              perPage: 2,
            },
            550: {
              perPage: 1,
              arrows: false,
              pagination: true,
            },
          },
          perMove: 1,
          gap: '1rem',
          classes: {
            arrows: 'splide__arrows',
            arrow : 'splide__arrow splide__test',
            pagination: 'splide__pagination splide__mypagination',
          },
        } }
      >
        <SplideTrack>
          <SplideSlide><Model /></SplideSlide>
          <SplideSlide><Model /></SplideSlide>
          <SplideSlide><Model /></SplideSlide>
          <SplideSlide><Model /></SplideSlide>
          <SplideSlide><Model /></SplideSlide>
          <SplideSlide><Model /></SplideSlide>
          <SplideSlide><Model /></SplideSlide>
        </SplideTrack>
      </Splide>
    </section>
  );
  }

  export default Models;