import React from 'react';
import Image from 'next/image';
import './How.module.scss';
import donut from './img/donut.svg';
import { Button } from '../Button';
import flour from './img/flour.svg';
import soy from './img/soy.svg';
import flakes from './img/flakes.svg';
import oil from './img/oil.svg';

const list = [
  {
    image: flour,
    title: 'Corn Flour',
    text: 'Corn starch, maize starch, or corn flour is the starch derived from corn grains',
  },
  {
    image: soy,
    title: 'Soy Flakes',
    text: 'Soy flakes defatted soy flakes are further processed into soybean meal for feeding.',
  },
  {
    image: flakes,
    title: 'Oats Flakes',
    text: 'Oats flakes are white to golden in color and are used baking and processing into muesli.',
  },
  {
    image: oil,
    title: 'Olive Oil',
    text: 'Olive oil is a liquid fat obtained from olive a Basin tree traditional crops.',
  },
];

export const HowItsMade: React.FC = () => {
  return (
    <section className='how-made'>
      <div className='how-made__left-side'>
        <h2>How it’s made?</h2>
        <p>
          A line of tasty and healthy specialities rich in fiber and vegetable protein baked
          specially for you and your loved ones, directly from the oven.. Taste and See. the wonders
          of <strong>Mybakery.</strong>
        </p>
        <Image className='image' src={donut} alt='Donut' />

        <Button />
      </div>
      <div className='how-made__right-side'>
        <ul className='how-made__right-side__list'>
          {list.map((item, index) => (
            <li key={index}>
              <Image src={item.image} alt='Ingredients' />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
