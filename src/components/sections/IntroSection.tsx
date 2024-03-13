import React, { FC } from 'react';
import Y2kDeco2 from '../Y2kDeco2';
import Y2kDeco3 from '../Y2kDeco3';
import IntroText from '../IntroText';

const IntroSection: FC = () => (
  <section
    className='flex relative h-[800px] w-full items-center justify-center '
    id='introduction'
  >
    <div className='absolute left-4 sm:left-[15%] bottom-10 sm:top-64 opacity-30 -rotate-45 sm:rotate-0'>
      <Y2kDeco2 />
    </div>
    <div className='absolute sm:right-[0%] sm:top-[25%] top-0 left-0 sm:left-[75%] opacity-30 -rotate-90 sm:rotate-0 '>
      <Y2kDeco3 />
    </div>
    <div className='w-[90%] sm:w-[70%] h-full '>
      <IntroText />
    </div>
  </section>
);

export default IntroSection;
