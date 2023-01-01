import card__material_sosna from '../images/card__material_sosna.jpg';
import card__material_bereza from '../images/card__material_bereza.jpg';
import card__material_karagach from '../images/card__material_karagach.jpg';
import card__material__ldsp from '../images/card__material__ldsp.png';
import card__material__mdf from '../images/card__material__mdf.png';
import card__material_derevo from '../images/card__material_derevo.png';
import tumba__napol from '../images/card__photo.png';
import tumba__podves from '../images/card__photo_podves.jpg';
import tumba__gobraz from '../images/card__photo_gobraz.jpg';
import image__napol from '../images/image__napol.jpg';
import image__podves from '../images/image__podves.jpg';
import image__forma_s from '../images/image__forma_s.jpg';

const bereza = {
  id: 100,
  wood: 'берёза',
  url: card__material_bereza,
  price: 27300,
};

const sosna = {
  id: 101,
  wood: 'сосна',
  url: card__material_sosna,
  price: 20250,
};

const dub = {
  id: 102,
  wood: 'карагач',
  url: card__material_karagach,
  price: 41500,
};

const ldsp = {
  id: 103,
  wood: 'Влагостойкий ЛДСП',
  url: card__material__ldsp,
  price: 8820,
};

const mdf = {
  id: 104,
  wood: 'МДФ в эмали',
  url: card__material__mdf,
  price: 12350,
};

const derevo = {
  id: 105,
  wood: 'Дерево',
  url: card__material_derevo,
  price: 41500,
};

export const materials_table = [
  sosna,
  bereza,
  dub,
]

export const materials_tumba = [
  ldsp,
  mdf,
  derevo,
]

export const models = [
  {
    id: 1,
    name: 'Напольная тумба',
    url: tumba__napol,
    icon: image__napol,
    price: '12 990',
    sizes : {
      width: 50,
      height: 50,
      depth: 30,
    },
    body: [
      sosna,
      bereza,
      dub,
    ],
    table: [
      ldsp,
      mdf,
      derevo,
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