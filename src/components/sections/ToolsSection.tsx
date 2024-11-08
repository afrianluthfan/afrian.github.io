import React, { FC } from 'react';
import AnimatedDivider from '../AnimatedDivider';
import ToolsCard from '../ToolCard/ToolsCard';
import ToolsText from '../ToolCard/ToolsText';

const StacksSection2: FC = () => (
  <section
    className='flex relative h-[800px] w-full items-center justify-center'
    id='libs'
  >
    <div className='flex flex-row w-[100%] h-full justify-center items-center'>
      <div className='flex relative w-[80%] sm:w-full items-center justify-start ml-4 sm:ml-12'>
        <ToolsCard />
      </div>
      <div className='h-[60%] mx-5 sm:mx-0'>
        <AnimatedDivider />
      </div>
      <div className='flex relative flex-col h-full sm:w-full w-96 sm:items-end justify-center sm:p-12'>
        <ToolsText />
      </div>
    </div>
  </section>
);

export default StacksSection2;
