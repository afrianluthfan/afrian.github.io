import React, { FC } from 'react';
import AccordionIntro from '../Experiences/AccordionIntro';
import Y2kDeco4 from '../Y2kDeco4';
import JourneyText from '../Experiences/JourneyText';
import AnimatedDivider from '../AnimatedDivider';

const IntroSection2: FC = () => (
  <section
    className='flex flex-row w-full h-[1400px] sm:h-[1000px] relative pt-48'
    id='journey'
  >
    <div className='flex flex-col w-[90%] z-10'>
      <div className='flex flex-row w-[25%] h-48 ml-12'>
        <div className='mr-5'>
          <AnimatedDivider />
        </div>
        <JourneyText />
      </div>
      <div className='flex h-96 sm:w-[50%] ml-12 mt-10'>
        <div className='mr-5'>
          <AnimatedDivider />
        </div>
        <div className='flex justify-between w-full'>
          <AccordionIntro />
        </div>
      </div>
    </div>
    <div className='absolute z-0 right-32 rotate-45 opacity-30'>
      <Y2kDeco4 />
    </div>
  </section>
);

export default IntroSection2;
