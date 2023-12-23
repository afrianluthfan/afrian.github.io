import React, { FC } from 'react';
import Image from 'next/image';

const Y2kDeco4: FC = () => (
  <div>
    <div className='dark:hidden w-auto h-auto'>
      <Image src='/deco4-dark.svg' alt='deco1' height={1200} width={1200} />
    </div>
    <div className='hidden dark:block w-auto h-auto'>
      <Image src='/deco4.svg' alt='deco1' height={1200} width={1200} />
    </div>
  </div>
);

export default Y2kDeco4;
