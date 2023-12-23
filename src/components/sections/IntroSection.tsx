import React, { FC } from 'react';
import Y2kDeco2 from '../Y2kDeco2';
import Y2kDeco3 from '../Y2kDeco3';
import IntroText from '../IntroText';

const IntroSection: FC = () => (
  <section
    className='flex relative h-[800px] w-full items-center justify-center'
    id='introduction'
  >
    <div className='absolute left-[10%] opacity-30'>
      <Y2kDeco2 />
    </div>
    <div className='absolute right-[0%] top-[0%] -rotate-[35deg] opacity-30'>
      <Y2kDeco3 />
    </div>
    <div className='flex flex-row w-[70%] h-full'>
      <IntroText />
    </div>
  </section>
);

export default IntroSection;
