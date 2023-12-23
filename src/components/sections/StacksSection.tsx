import React, { FC } from 'react';
import { Divider } from '@nextui-org/react';
import TechCard from '../TechCard/TechCard';
import StackText from '../StackText';

const StacksSection: FC = () => (
  <section
    className='flex relative h-[800px] w-full items-center justify-center'
    id='stacks'
  >
    <div className='flex flex-row w-[100%] h-full justify-center items-center'>
      <StackText />
      <div className='h-[60%]'>
        <Divider orientation='vertical' className='w-1' />
      </div>
      <div className='flex relative w-full h-full items-center justify-end mr-12'>
        <TechCard />
      </div>
    </div>
  </section>
);

export default StacksSection;
