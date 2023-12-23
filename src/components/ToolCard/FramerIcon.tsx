import React, { FC } from 'react';
import Image from 'next/image';

const FramerIcon: FC = () => (
  <div>
    <div className='dark:hidden'>
      <Image
        src='/framer-svgrepo-com.svg'
        alt='framer black'
        height={100}
        width={100}
      />
    </div>
    <div className='hidden dark:block'>
      <Image
        src='/framer-svgrepo-com-white.svg'
        alt='framer white'
        height={100}
        width={100}
      />
    </div>
  </div>
);

export default FramerIcon;
