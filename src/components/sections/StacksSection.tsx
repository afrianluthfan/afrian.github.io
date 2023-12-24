import React, { FC } from 'react';
import AnimatedDivider from '../AnimatedDivider';
import TechCard from '../TechCard/TechCard';
import StackText from '../TechCard/StackText';

const StacksSection: FC = () => (
  <section
    className='flex relative h-[800px] w-full items-center justify-between sm:justify-center pr-5 sm:p-0'
    id='stacks'
  >
    <div className='flex flex-row w-[100%] h-full justify-center items-center'>
      <StackText />
      <div className='h-[60%] mx-5 sm:p-0'>
        <AnimatedDivider />
      </div>
      <div className='flex relative w-full h-full items-center justify-end sm:mr-12'>
        <TechCard />
      </div>
    </div>
  </section>
);

export default StacksSection;
