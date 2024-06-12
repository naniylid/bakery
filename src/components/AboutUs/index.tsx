import React from 'react';
import Image from 'next/image';
import './About.module.scss';
import { Button } from '../Button';
import macarons from './img/macarons.svg';
import bread1 from './img/bread1.svg';
import bread2 from './img/bread2.svg';
import sandwich from './img/sandwich.svg';
import sandwich2 from './img/sandwich2.svg';

export const AboutUs: React.FC = () => {
  return (
    <section className='about'>
      <h2>About Us</h2>
      <p>
        From the harmonious union between a mixes of cereals flours and legume flours, a new line of
        tasty specialitiesrich in fiber and vegetable protein is born
      </p>
      <div className='about__button'>
        <Button />
      </div>

      <div className='about__fresh text'>
        <Image src={macarons} alt='macarons' />
        <h3>FRESH</h3>
        <p>Freshly made healthy for you and your loved ones directly from the oven..</p>
      </div>
      <div className='about__tasty text'>
        <h3>TASTY</h3>
        <p>Freshly made healthy for you and your loved ones directly from the oven..</p>
      </div>
      <ul className='about__image--wrapper'>
        <li>
          <Image src={bread1} alt='Bread' />
        </li>
        <li>
          <Image src={sandwich} alt='Sandwich' />
        </li>
        <li>
          <Image src={bread2} alt='Bread' />
        </li>
      </ul>
      <div className='about__natural text'>
        <h3>NATURAL</h3>
        <p>Freshly made healthy for you and your loved ones directly from the oven..</p>
      </div>
      <Image className='about__sandwich' src={sandwich2} alt='Sandwich' />
    </section>
  );
};
