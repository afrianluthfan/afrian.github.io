import React, { FC } from 'react';
import AnimatedTimeline from '../Experiences/AnimatedTimeline';
import AnimatedLegend from '../Experiences/AnimatedLegend';
import AnimatedExpText from '../Experiences/AnimatedExpText';

const ExperiencesSection: FC = () => (
  <section
    className='flex flex-col justify-between w-full sm:h-[800px] h-[1200px] relative pt-32 sm:pl-16 px-8'
    id='exp'
  >
    <AnimatedExpText />
    <AnimatedTimeline />
    <AnimatedLegend />
  </section>
);

export default ExperiencesSection;
