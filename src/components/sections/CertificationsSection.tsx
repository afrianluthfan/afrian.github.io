import React, { FC } from 'react';
import AnimatedDivider from '../AnimatedDivider';
import CertText from '../Certifications/CertText';
import AnimatedAccordionCard from '../Certifications/AnimatedAccordionCard';
import Y2kDeco5 from '../Y2kDeco5';

const CertificationsSection: FC = () => (
  <section
    className='flex sm:flex-row flex-col relative sm:h-[800px] w-full items-center justify-center gap-10'
    id='certifications'
  >
    <div className='flex sm:w-[40%] w-[80%]'>
      <CertText />
    </div>
    <div className='w-96 h-96 absolute top-0 left-0 rotate-90'>
      <Y2kDeco5 />
    </div>
    <div className='hidden sm:block h-[80%]'>
      <AnimatedDivider />
    </div>
    <AnimatedAccordionCard />
  </section>
);

export default CertificationsSection;
