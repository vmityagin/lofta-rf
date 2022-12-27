import card__material from '../images/card__material.jpg';
import tumba__napol from '../images/card__photo.png';
import tumba__podves from '../images/card__photo_podves.jpg';
import tumba__gobraz from '../images/card__photo_gobraz.jpg';
import image__napol from '../images/image__napol.jpg';
import image__podves from '../images/image__podves.jpg';
import image__forma_s from '../images/image__forma_s.jpg';

const bereza = {
  id: 100,
  wood: 'берёза',
  url: card__material,
};

const sosna = {
  id: 101,
  wood: 'сосна',
  url: card__material,
};

const dub = {
  id: 102,
  wood: 'дуб',
  url: card__material,
};

export const materials_table = [
  bereza,
  sosna,
  dub,
]

export const materials_tumba = [
  bereza,
  sosna,
  dub,
]

export const models = [
  {
    id: 1,
    name: 'Напольная тумба',
    url: tumba__napol,
    icon: image__napol,
    price: '12 990',
    sizes : {
      width: 100,
      height: 50,
      depth: 40,
    },
    body: [
      bereza,
      sosna,
      dub,
    ],
    table: [
      bereza,
      sosna,
      dub,
    ],
    delivery: 'Доставка 7 дней',
  },
  {
    id: 2,
    name: 'Подвесная тумба',
    url: tumba__podves,
    icon: image__podves,
    price: '18 990',
    sizes : {
      width: 100,
      height: 50,
      depth: 40,
    },
    body: [
      bereza,
    ],
    table: [
      bereza,
      dub,
    ],
    delivery: 'Доставка 10 дней',
  },
  {
    id: 3,
    name: 'Тумба с S-столешницей',
    url: tumba__gobraz,
    icon: image__forma_s,
    price: '25 990',
    sizes : {
      width: 100,
      height: 50,
      depth: 40,
    },
    body: [
      dub,
    ],
    table: [
      bereza,
      sosna,
    ],
    delivery: 'Доставка 10 дней',
  },
];