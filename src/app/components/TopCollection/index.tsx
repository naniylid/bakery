import React from 'react';
import Image from 'next/image';
import './TopCollection.module.scss';
import { collection } from './content';

export const TopCollection: React.FC = () => {
  return (
    <section className='top-collection'>
      <h2>Top Collection</h2>

      <table className='top-collection__table'>
        <thead>
          <tr className='top-collection__table--head'>
            <th>Collection</th>
            <th>Volume</th>
            <th>24h %</th>
            <th>Floor Price</th>
            <th>Owners</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {collection.map((item, index) => (
            <tr key={index} className='top-collection__table--body'>
              <td className='top-collection__table--body__collection'>
                <Image src={item.image} alt='Person' />
                <div className='title'>
                  <h4>{item.title}</h4>
                  <p>By Alex</p>
                </div>
              </td>
              <td className='top-collection__table--body__volume'>
                <svg
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.975 2.81458L7.76758 16.603L15.975 21.5274L24.1824 16.603L15.975 2.81458ZM7.76758 18.2445L15.975 29.7348L24.1824 18.2445L15.975 23.1689L7.76758 18.2445Z'
                    fill='#141416'
                  />
                </svg>
                <p>{item.volume}</p>
              </td>
              <td className='top-collection__table--body__gain'>{item.gain}</td>
              <td className='top-collection__table--body__price'>
                <svg
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.975 2.81458L7.76758 16.603L15.975 21.5274L24.1824 16.603L15.975 2.81458ZM7.76758 18.2445L15.975 29.7348L24.1824 18.2445L15.975 23.1689L7.76758 18.2445Z'
                    fill='#141416'
                  />
                </svg>
                {item.price}
              </td>
              <td className='top-collection__table--body__owners text'>{item.owners}</td>
              <td className='text'>{item.items}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href='' className='top-collection__link'>
        <p> Explore All</p>
        <svg
          width='17'
          height='3'
          viewBox='0 0 17 3'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='line'
        >
          <path
            d='M1.82129 1.351H15.7861'
            stroke='#ACADB9'
            stroke-width='1.99471'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <svg
          width='10'
          height='17'
          className='arrow'
          viewBox='0 0 10 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.80176 1.36646L8.78414 8.34884L1.80176 15.3312'
            stroke='#ACADB9'
            stroke-width='1.99471'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </a>
    </section>
  );
};
