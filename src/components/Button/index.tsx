import React from 'react';
import Image from 'next/image';
import image from './bread.svg';
import './Button.module.scss';

export const Button: React.FC = () => {
  return (
    <button id='button'>
      <a href=''>
        <Image src={image} alt='Button' />
        ORDER NOW <strong>→</strong>
      </a>
    </button>
  );
};
