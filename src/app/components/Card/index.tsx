import React from 'react';
import Image from 'next/image';
import './Card.module.scss';
import icon from './img/icon.svg';

export const Card: React.FC<{ card: { image: string; title: string; price: string } }> = ({
  card,
}) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <div className='card__image--time'>
          <p>07h 09m 12s</p>
        </div>
        <Image src={card.image} alt='NFT' />
      </div>
      <h4>{card.title}</h4>
      <div className='card__info'>
        <div className='card__info--left'>
          <p className='card__info--left__text'>Current bid</p>
          <div className='card__info--left__price'>
            <Image src={icon} alt='Icon' />
            <p>{card.price}</p>
          </div>
        </div>
        <button className='card__info--button'>Place bid</button>
      </div>
    </div>
  );
};
