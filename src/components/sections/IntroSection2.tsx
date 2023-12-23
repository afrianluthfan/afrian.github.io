import React, { FC } from 'react';
import { Divider } from '@nextui-org/react';
import AccordionIntro from '../AccordionIntro';
import Y2kDeco4 from '../Y2kDeco4';

const IntroSection2: FC = () => (
  <section
    className='flex flex-row w-full h-[1000px] relative pt-48'
    id='journey'
  >
    <div className='flex flex-col w-[90%] z-10'>
      <div className='flex flex-row w-[25%] h-48 ml-12'>
        <Divider orientation='vertical' className='mr-5 w-2' />
        <h1 className='font-albert text-6xl font-bold text-left'>
          A little bit about my journey
        </h1>
      </div>
      <div className='flex h-96 w-[50%] ml-12 mt-10'>
        <Divider orientation='vertical' className='mr-5 w-2' />
        <div className='flex justify-between w-full'>
          <AccordionIntro />
        </div>
      </div>
    </div>
    <div className='absolute z-0 -right-48 rotate-45 opacity-30'>
      <Y2kDeco4 />
    </div>
  </section>
);

export default IntroSection2;
