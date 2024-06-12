import React from 'react';
import Image from 'next/image';
import './header.module.scss';
import donut from './img/donut.svg';
import bread from './img/bread-main.svg';
import cake from './img/cake.svg';
import { Button } from '../Button';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='title__wrapper'>
        <h1 className='header__title'>MyBakery</h1>
        <Image src={donut} alt='Donut' />
      </div>
      <div className='line1 line'></div>
      <div className='line2 line'></div>
      <div className='line3 line'></div>
      <div className='header__main-photo'>
        <Image src={bread} alt='Bread' />
      </div>
      <div className='line4 line'></div>

      <div className='header__info'>
        <Image src={cake} alt='cake' />
        <p>
          The bakery is an establishment that produces food baked in an over such as bread, cookies,
          cakes, pastries, and pies. Some retail bakeries are also categorized as cafes, serving
          coffee and tea to customers.
        </p>
      </div>
      <div className='header__button'>
        <Button />
      </div>
    </header>
  );
};
