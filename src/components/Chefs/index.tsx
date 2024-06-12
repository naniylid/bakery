import React from 'react';
import Image from 'next/image';
import './Chefs.module.scss';
import firstPerson from './img/firstPerson.svg';
import star from './img/star.svg';
import secondPerson from './img/secondPerson.svg';
import donut from './img/donut.svg';
import { Button } from '../Button';

export const Chefs: React.FC = () => {
  return (
    <section className='chefs'>
      <div className='chefs__top'>
        <div className='chefs__top--left'>
          <div className='rating'>
            <Image src={star} alt='Star' />
            <p>4.5/5</p>
            <h4>Good Taste!</h4>
          </div>
          <Image className='image' src={firstPerson} alt='Chef photo' />
        </div>
        <div className='chefs__top--right'>
          <h2>Best Chef in Field</h2>
          <p>
            A line of tasty and healthy specialities rich in fiber and vegetable protein baked
            specially for you and your loved ones, directly from the oven.. Taste and See. the
            wonders of <strong>Mybakery.</strong>
          </p>
          <Button />
        </div>
      </div>
      <div className='chefs__bottom'>
        <div className='chefs__bottom--left'>
          <h2>Discover Goodness</h2>
          <p>
            A line of tasty and healthy specialities rich in fiber and vegetable protein baked
            specially for you and your loved ones, directly from the oven.. Taste and See. the
            wonders of <strong>Mybakery.</strong>
          </p>
          <Button />
        </div>
        <div className='chefs__bottom--right'>
          <div className='add-item'>
            <h4>Doughnut</h4>
            <p>$3.55/Slice</p>
            <Image src={donut} alt='Donut' />
            <button id='button'>Add item</button>
          </div>
          <Image className='image' src={secondPerson} alt='Chef photo' />
        </div>
      </div>
    </section>
  );
};
