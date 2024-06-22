import first from './img/1svg.svg';
import second from './img/2.svg';
import third from './img/3.svg';
import four from './img/4.svg';

export type CardProp = {
  title: string;
  price: number;
  image: string;
  collection: string;
  category: number;
};

export const cards: CardProp[] = [
  {
    title: 'Sun-Glass',
    price: 1.75,
    image: first,
    collection: 'original',
    category: 1,
  },
  {
    title: 'Sun-Glass',
    price: 1.75,
    image: second,
    collection: 'original',
    category: 1,
  },
  {
    title: 'Sun-Glass',
    price: 1.75,
    image: third,
    collection: 'original',
    category: 1,
  },
  {
    title: 'NuEvey',
    price: 1.25,
    image: four,
    collection: 'original',
    category: 1,
  },
  {
    title: 'Sun-Glass',
    price: 1.75,
    image: first,
    collection: 'original',
    category: 1,
  },
  {
    title: 'Sun-Glass',
    price: 1.75,
    image: second,
    collection: 'original',
    category: 1,
  },
  {
    title: 'Sun-Glass',
    price: 1.75,
    image: third,
    collection: 'original',
    category: 1,
  },
  {
    title: 'NuEvey',
    price: 1.25,
    image: four,
    collection: 'original',
    category: 1,
  },
];
