'use client';

import React from 'react';
import './Slider.module.scss';
import { Card } from '../Card';
import { cards } from '../Card/content';

export const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const totalCards = cards.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  React.useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='slider-section'>
      <h2>Weekly - Top NFT</h2>
      <div className='slider'>
        <div className='slider-content'>
          <div
            className='slider-track'
            style={{
              transform: `translateX(-${(currentIndex / totalCards) * 100}%)`,
            }}
          >
            {cards.concat(cards).map((card, index) => (
              <div className='slider-item' key={index}>
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='slider__buttons'>
        <div className='slider-controls'>
          <button onClick={goToPrevious} className='slider-button'>
            <svg width='17' height='10' viewBox='0 0 17 10' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M6.23973 0.389755C5.80229 -0.0140416 5.12034 0.0132326 4.71654 0.450673L1.23402 4.22336C0.852869 4.63627 0.852865 5.27271 1.23401 5.68562L4.71653 9.45839C5.12032 9.89584 5.80228 9.92312 6.23973 9.51933C6.67717 9.11554 6.70445 8.43358 6.30066 7.99614L4.48802 6.03242L14.9611 6.03242C15.5565 6.03242 16.0391 5.54982 16.0391 4.9545C16.0391 4.35918 15.5565 3.87657 14.9611 3.87657L4.48805 3.87657L6.30065 1.91295C6.70445 1.47551 6.67717 0.793551 6.23973 0.389755Z'
              />
            </svg>
          </button>
          <div className='separator' />
          <button onClick={goToNext} className='slider-button'>
            <svg width='17' height='10' viewBox='0 0 17 10' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                fill='#929292'
                d='M10.7603 0.389755C11.1977 -0.0140416 11.8797 0.0132326 12.2835 0.450673L15.766 4.22336C16.1471 4.63627 16.1471 5.27271 15.766 5.68562L12.2835 9.45839C11.8797 9.89584 11.1977 9.92312 10.7603 9.51933C10.3228 9.11554 10.2955 8.43358 10.6993 7.99614L12.512 6.03242L2.03886 6.03242C1.44354 6.03242 0.960937 5.54982 0.960937 4.9545C0.960937 4.35918 1.44354 3.87657 2.03886 3.87657L12.5119 3.87657L10.6993 1.91295C10.2956 1.47551 10.3228 0.793551 10.7603 0.389755Z'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
