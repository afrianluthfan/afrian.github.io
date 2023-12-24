import React, { FC } from 'react';
import Deco4Light from './Experiences/Deco4Light';
import Deco4Dark from './Experiences/Deco4Dark';

const Y2kDeco4: FC = () => (
  <div>
    <div className='dark:hidden w-[1200px] h-[1200px]'>
      <Deco4Light />
    </div>
    <div className='hidden dark:block w-[1200px] h-[1200px]'>
      <Deco4Dark />
    </div>
  </div>
);

export default Y2kDeco4;
