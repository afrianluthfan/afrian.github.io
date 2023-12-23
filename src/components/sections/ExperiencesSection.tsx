import React, { FC } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Timeline from '../Experiences/Timeline';

const ExperiencesSection: FC = () => (
  <section
    className='flex flex-col justify-between w-full h-[800px] relative pt-32 pl-16 border'
    id='exp'
  >
    <h1 className='font-albert text-6xl font-bold text-left'>
      Here&apos;s a timeline to help you visualize my journey better:
    </h1>

    <div className='absolute w-full bottom-52'>
      <Timeline />
    </div>
    <div className='w-[30%] pl-72 mb-8 h-[30%]'>
      <Card className='h-full'>
        <CardBody className='p-5'>
          <h1 className='font-bold'>Legendddd</h1>
        </CardBody>
      </Card>
    </div>
  </section>
);

export default ExperiencesSection;
