import React, { FC } from 'react';
import Image from 'next/image';

const AIIcon: FC = () => (
  <div>
    <div className='dark:hidden'>
      <Image
        src='/illustrator-svgrepo-com.svg'
        alt='ai black'
        height={100}
        width={100}
      />
    </div>
    <div className='hidden dark:block'>
      <Image
        src='/illustrator-svgrepo-white.svg'
        alt='ai white'
        height={100}
        width={100}
      />
    </div>
  </div>
);

export default AIIcon;
