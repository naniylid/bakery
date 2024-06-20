import React from 'react';
import Image from 'next/image';
import './Header.module.scss';
import first from './img/firstImage.svg';
import second from './img/secondImage.svg';
import back from './img/back.svg';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__left-side'>
        <div className='header__left-side--line'></div>
        <h1>Discover And Create NFTs</h1>
        <p>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get
          a <strong>$20 bonus.</strong>
        </p>
        <div className='header__left-side--button-wrapper'>
          <button className='dark-button'>Explore More</button>
          <button className='light-button'>create NFT</button>
        </div>
        <div className='header__left-side--statistics'>
          <ul>
            <li>
              <h3>430K+</h3>
              <p>Art Works</p>
            </li>
            <li>
              <h3>159K+</h3>
              <p>Creators</p>
            </li>
            <li>
              <h3>87K+</h3>
              <p>Collections</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='header__right-side'>
        <div className='arrow'>
          <svg
            width='131'
            height='136'
            viewBox='0 0 131 136'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.6507 43.2949C32.4339 30.7255 51.9743 23.0115 72.683 28.6293C91.3749 33.7001 103.143 49.6308 90.5396 69.3323C84.5735 78.6586 71.8706 85.1866 61.8852 79.874C50.7606 73.9554 59.5288 59.017 66.6505 54.7089C83.2839 44.6468 106.696 49.3237 118.212 68.8676C131.849 92.0121 108.785 103.532 108.769 103.344'
              stroke='black'
              stroke-width='3.37884'
              stroke-miterlimit='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M19.2682 18.3822C19.8774 20.8066 19.5256 23.2337 19.2862 25.6772C18.5006 33.7008 15.3552 42.0309 9.71151 47.2933C17.1379 44.0371 27.7921 42.619 34.5374 48.3347'
              stroke='black'
              stroke-width='3.37884'
              stroke-miterlimit='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        <Image className='background' src={back} alt='background' />
        <div className='header__right-side--images'>
          <Image className='first-image' src={first} alt='NFT' />
          <Image className='second-image' src={second} alt='NFT' />
        </div>
      </div>
    </header>
  );
};
