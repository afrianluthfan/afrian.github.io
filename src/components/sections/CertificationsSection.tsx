import React, { FC } from 'react';
import AnimatedDivider from '../AnimatedDivider';
import CertText from '../Certifications/CertText';
import AnimatedAccordionCard from '../Certifications/AnimatedAccordionCard';
import AnimatedDividerH from '../AnimatedDividerH';

const CertificationsSection: FC = () => (
  <section
    className='flex sm:flex-row flex-col relative sm:h-[800px] w-full items-center justify-center gap-10'
    id='certifications'
  >
    <div className='flex sm:w-[40%] w-[80%]'>
      <CertText />
    </div>
    <div className='hidden sm:block h-[80%]'>
      <AnimatedDivider />
    </div>
    <div className='sm:hidden block w-[80%]'>
      <AnimatedDividerH />
    </div>

    <AnimatedAccordionCard />
  </section>
);

export default CertificationsSection;
