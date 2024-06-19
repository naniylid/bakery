import React from 'react';
import './Navigation.module.scss';
import Image from 'next/image';
import wave from './Wave.svg';

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <Image className='navigation__logo' src={wave} alt='Wave' />
      <ul className='navigation__list'>
        <li>
          <a href='#'>Discover</a>
        </li>
        <li>
          <a href='#'>Creators</a>
        </li>
        <li>
          <a href='#'>Sell</a>
        </li>
        <li>
          <a href='#'>Stats</a>
        </li>
      </ul>

      <div className='navigation__search-wallet'>
        <label htmlFor='search'>
          <div className='icon'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.94976 17.7296C14.5695 17.7296 18.3146 13.9845 18.3146 9.3648C18.3146 4.74505 14.5695 1 9.94976 1C5.33001 1 1.58496 4.74505 1.58496 9.3648C1.58496 13.9845 5.33001 17.7296 9.94976 17.7296Z'
                stroke='#9D9D9D'
                stroke-width='1.79246'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.9248 15.3394L23.0946 22.5092'
                stroke='#9D9D9D'
                stroke-width='1.79246'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <input placeholder='Search Art Work / Creator' id='search' type='text' />
        </label>
      </div>
      <button className='navigation__button'>Connect Wallet</button>
    </nav>
  );
};
