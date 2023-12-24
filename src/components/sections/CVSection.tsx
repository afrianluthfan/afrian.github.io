import React, { FC } from 'react';
import CVCard from '../CV/CVCard';

const CVSection: FC = () => (
  <section className='relative h-[1000px] w-full p-16' id='CV'>
    <CVCard />
  </section>
);

export default CVSection;
