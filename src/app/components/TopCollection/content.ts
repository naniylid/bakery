import first from '../Card/img/1svg.svg';
import second from '../Card/img/2.svg';

type CollectionType = {
  image: string;
  title: string;
  volume: string;
  gain: string;
  price: string;
  owners: string;
  items: number;
};

export const collection: CollectionType[] = [
  {
    image: first,
    title: 'Alex Ca.',
    volume: '8,456',
    gain: '+ 27.78%',
    price: '3,5',
    owners: '2.2K',
    items: 500,
  },
  {
    image: second,
    title: 'Alex Ca.',
    volume: '4,780',
    gain: '+ 27.78%',
    price: '7,9',
    owners: '3.4K',
    items: 900,
  },
  {
    image: first,
    title: 'Alex Ca.',
    volume: '8,456',
    gain: '+ 27.78%',
    price: '3,5',
    owners: '2.2K',
    items: 500,
  },
  {
    image: second,
    title: 'Alex Ca.',
    volume: '4,780',
    gain: '+ 27.78%',
    price: '7,9',
    owners: '3.4K',
    items: 900,
  },
];
