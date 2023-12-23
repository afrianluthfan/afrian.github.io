import React, { FC } from 'react';
import { Divider } from '@nextui-org/react';
import ToolsCard from '../ToolCard/ToolsCard';

const StacksSection2: FC = () => (
  <section
    className='flex relative h-[800px] w-full items-center justify-center'
    id='libs'
  >
    <div className='flex flex-row w-[100%] h-full justify-center items-center'>
      <div className='flex relative w-full h-full items-center justify-start ml-12'>
        <ToolsCard />
      </div>
      <div className='h-[60%]'>
        <Divider orientation='vertical' className='w-1' />
      </div>
      <div className='flex relative flex-col h-[100%] w-[100%] items-end justify-center p-12'>
        <h1 className='font-albert text-8xl font-bold text-right w-[80%]'>
          ..and these are the supporting libraries and tools I use alongside
          them.
        </h1>
      </div>
    </div>
  </section>
);

export default StacksSection2;
