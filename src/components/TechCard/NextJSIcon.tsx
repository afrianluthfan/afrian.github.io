import React, { FC } from 'react';
import Image from 'next/image';

const NextJSIcon: FC = () => (
  <div>
    <div className='dark:hidden'>
      <Image src='./nextjs-black.svg' alt='deco1' height={100} width={100} />
    </div>
    <div className='hidden dark:block'>
      <Image src='./nextjs-white.svg' alt='deco1' height={100} width={100} />
    </div>
  </div>
);

export default NextJSIcon;
