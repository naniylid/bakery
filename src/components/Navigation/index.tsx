import React from 'react';
import './navigation.module.scss';
import Image from 'next/image';

import search from './img/search.svg';
import vector from './img/Vector.svg';

export const Navigation: React.FC = () => {
  return (
    <nav className='navigation'>
      <h3 className='navigation__logo'>MyBakery</h3>
      <ul className='navigation__list'>
        <li>manufacturing</li>
        <li>packaging</li>
        <li>forms</li>
        <li>delivery</li>
      </ul>

      <div className='navigation__items'>
        <Image src={search} alt='Search' />
        <Image src={vector} alt='Menu' />
      </div>
    </nav>
  );
};
