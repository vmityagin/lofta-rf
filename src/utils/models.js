import card__material from '../images/card__material.jpg';
import tumba__napol from '../images/card__photo.png';
import tumba__podves from '../images/card__photo_podves.jpg';
import tumba__gobraz from '../images/card__photo_gobraz.jpg';

export const models = [
  {
    id: 1,
    name: 'Напольная тумба',
    url: tumba__napol,
    price: '12 990',
    sizes : {
      width: 100,
      height: 50,
      depth: 40,
    },
    body: [
      {
        wood: 'берёза',
        url: card__material,
      },
      {
        wood: 'сосна',
        url: card__material,
      },
      {
        wood: 'дуб',
        url: card__material,
      },
    ],
    table: [
      {
        wood: 'берёза',
        url: card__material,
      },
      {
        wood: 'сосна',
        url: card__material,
      },
      {
        wood: 'дуб',
        url: card__material,
      },
    ],
    delivery: 'Доставка 7 дней',
  },
  {
    id: 2,
    name: 'Подвесная тумба',
    url: tumba__podves,
    price: '18 990',
    sizes : {
      width: 100,
      height: 50,
      depth: 40,
    },
    body: [
      {
        wood: 'берёза',
        url: card__material,
      },
    ],
    table: [
      {
        wood: 'берёза',
        url: card__material,
      },
      {
        wood: 'сосна',
        url: card__material,
      },
      {
        wood: 'дуб',
        url: card__material,
      },
    ],
    delivery: 'Доставка 10 дней',
  },
  {
    id: 3,
    name: 'Тумба с S-столешницей',
    url: tumba__gobraz,
    price: '25 990',
    sizes : {
      width: 100,
      height: 50,
      depth: 40,
    },
    body: [
      {
        wood: 'берёза',
        url: card__material,
      },
    ],
    table: [
      {
        wood: 'берёза',
        url: card__material,
      },
      {
        wood: 'сосна',
        url: card__material,
      },
      {
        wood: 'дуб',
        url: card__material,
      },
    ],
    delivery: 'Доставка 10 дней',
  },
];