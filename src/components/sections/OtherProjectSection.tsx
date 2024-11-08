import React, { FC } from 'react';
import IdentifyCard from '../OtherProjects/IdenfityCard';
// import MorowaliCard from '../OtherProjects/MorowaliCard';
import Text from '../OtherProjects/Text';
import Y2kDeco6 from '../Y2kDeco6';
import Y2kDeco7 from '../Y2kDeco7';
import VexoCard from '../OtherProjects/VexoCard';

const OtherProjectSection: FC = () => (
  <section
    className='relative h-[2000px] sm:h-[1300px] w-full sm:p-16 flex flex-col'
    id='proj'
  >
    <div className='w-96 h-96 absolute top-28 -right-28 rotate-12'>
      <Y2kDeco6 />
    </div>
    <Text />
    <div className='flex justify-center flex-col sm:flex-row items-center w-full h-full z-10'>
      <IdentifyCard />
      <VexoCard />
      {/* <MorowaliCard /> */}
    </div>
    <div className='w-96 h-96 absolute bottom-0 left-0 rotate-12 z-0'>
      <Y2kDeco7 />
    </div>
  </section>
);

export default OtherProjectSection;
