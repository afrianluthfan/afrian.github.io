import React, { FC } from 'react';
// import IdentifyCard from '../OtherProjects/IdenfityCard';
// import MorowaliCard from '../OtherProjects/MorowaliCard';
import Text from '../OtherProjects/Text';
import Y2kDeco6 from '../Y2kDeco6';
import Y2kDeco7 from '../Y2kDeco7';
// import VexoCard from '../OtherProjects/VexoCard';
import CardsCarousel from '../OtherProjects/CardsCarousel';

const OtherProjectSection: FC = () => (
  <section
    className='relative h-[1400px] sm:h-fit w-full sm:p-16 flex flex-col overflow-x-hidden overflow-y-clip'
    id='proj'
  >
    <div className='w-96 h-96 absolute top-28 -right-28 rotate-12'>
      <Y2kDeco6 />
    </div>
    <Text />
    <CardsCarousel />
    {/* <div 
      <IdentifyCard />
      <VexoCard />
      <VexoCard />
      <VexoCard />
      <VexoCard />
      <VexoCard />
      <VexoCard />
      <MorowaliCard />
    </div> */}
    <div className='w-96 h-96 absolute bottom-0 left-0 rotate-12 z-0'>
      <Y2kDeco7 />
    </div>
  </section>
);

export default OtherProjectSection;
