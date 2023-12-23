import React, { FC } from 'react';
import Image from 'next/image';

const PSIcon: FC = () => (
  <div>
    <div className='dark:hidden'>
      <Image
        src='/photoshop-svgrepo-com.svg'
        alt='ps black'
        height={100}
        width={100}
      />
    </div>
    <div className='hidden dark:block'>
      <Image
        src='/photoshop-svgrepo-white.svg'
        alt='ps white'
        height={100}
        width={100}
      />
    </div>
  </div>
);

export default PSIcon;
