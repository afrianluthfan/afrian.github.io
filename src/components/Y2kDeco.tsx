import React, { FC } from 'react';
import Image from 'next/image';

const Y2kDeco: FC = () => (
  <div>
    <div className='dark:hidden'>
      <Image src='./deco1-dark.svg' alt='deco1' height={400} width={400} />
    </div>
    <div className='hidden dark:block'>
      <Image src='./deco1.svg' alt='deco1' height={400} width={400} />
    </div>
  </div>
);

export default Y2kDeco;
