import React from 'react';
import Image from 'next/image';
import './RecentViewed.module.scss';
import alex from '../Card/img/1svg.svg';
import juliya from '../Card/img/2.svg';

export const RecentViewed: React.FC = () => {
  return (
    <div className='recent-viewed'>
      <div className='recent-viewed__title'>
        <h3>Recent Viewed</h3>
        <svg
          width='24'
          height='11'
          viewBox='0 0 24 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_4_2136)'>
            <path
              d='M11 5.61536C11 5.86157 11.4477 6.06116 12 6.06116C12.5523 6.06116 13 5.86157 13 5.61536C13 5.36915 12.5523 5.16956 12 5.16956C11.4477 5.16956 11 5.36915 11 5.61536Z'
              stroke='#CBD5E0'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M4 5.61536C4 5.86157 4.44772 6.06116 5 6.06116C5.55228 6.06116 6 5.86157 6 5.61536C6 5.36915 5.55228 5.16956 5 5.16956C4.44772 5.16956 4 5.36915 4 5.61536Z'
              stroke='#CBD5E0'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M18 5.61536C18 5.86157 18.4477 6.06116 19 6.06116C19.5523 6.06116 20 5.86157 20 5.61536C20 5.36915 19.5523 5.16956 19 5.16956C18.4477 5.16956 18 5.36915 18 5.61536Z'
              stroke='#CBD5E0'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_4_2136'>
              <rect
                width='10.6993'
                height='24'
                fill='white'
                transform='translate(24 0.265747) rotate(90)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <ul className='recent-viewed__list'>
        <li>
          <div className='list__image'>
            <p>1</p>
            <Image src={alex} alt='NFT' />
          </div>
          <div className='list__text'>
            <h4>Alex Ca.</h4>
            <p>Alexy</p>
          </div>
          <div className='list__price'>
            <div className='list__price--wrapper'>
              <svg
                width='19'
                height='18'
                viewBox='0 0 19 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.43669 1.50488L4.93555 9.06681L9.43669 11.7675L13.9378 9.06681L9.43669 1.50488ZM4.93555 9.96704L9.43669 16.2686L13.9378 9.96704L9.43669 12.6677L4.93555 9.96704Z'
                  fill='#141416'
                />
              </svg>
              <p>8,456</p>
            </div>
            <p className='list__price--percent positive'>+23,00%</p>
          </div>
        </li>
        <li>
          <div className='list__image'>
            <Image src={juliya} alt='NFT' />
            <p>2</p>
          </div>
          <div className='list__text'>
            <h4>Juliya S.</h4>
            <p>JuliyaS</p>
          </div>
          <div className='list__price'>
            <div className='list__price--wrapper'>
              <svg
                width='19'
                height='18'
                viewBox='0 0 19 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.43669 1.50488L4.93555 9.06681L9.43669 11.7675L13.9378 9.06681L9.43669 1.50488ZM4.93555 9.96704L9.43669 16.2686L13.9378 9.96704L9.43669 12.6677L4.93555 9.96704Z'
                  fill='#141416'
                />
              </svg>
              <p>5,327</p>
            </div>
            <p className='list__price--percent negative'>-32,01%</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
