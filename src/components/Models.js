import Model from './Model';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { models } from '../utils/models';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import React from 'react';

function Models({
  addScroll, 
  removeScroll,
  setIsPhotosPopup,
  setIsArrayPhotos,
  isArrayPhotos,
}) {

  return (
    <section className="models" id="models">
      <p className="models__subtitle">Модельный ряд</p>
      <h2 className="models__title">Тумбы</h2>
      <Splide
        className="splide"
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
          {
            models.map((model) => (
              <SplideSlide key={model.id}>
                <Model 
                  model={model}
                  addScroll={addScroll}
                  setIsPhotosPopup={setIsPhotosPopup}
                  removeScroll={removeScroll}
                  isArrayPhotos={isArrayPhotos}
                  setIsArrayPhotos={setIsArrayPhotos}
                 />
              </SplideSlide >
            ))
          }
      </Splide>
    </section>
  );
  }

  export default Models;