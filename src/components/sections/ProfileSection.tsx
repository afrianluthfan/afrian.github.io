import React, { FC } from 'react';
import Y2kDeco from '../Y2kDeco';

const ProfileSection: FC = () => (
  <section
    className='flex relative h-[1000px] w-full justify-center items-center'
    id='top'
  >
    <div className='flex absolute right-64 bottom-48 w-[350px] h-[350px] items-center justify-center z-0 opacity-30'>
      <Y2kDeco />
    </div>

    <div className='flex flex-col h-full w-[70%] p-12 justify-center items-center'>
      <h1 className='font-montserrat sm:text-2xl text-center mb-10'>
        Continuously growing, continually learning.
      </h1>
      <h1 className='font-nunisa text-7xl sm:text-9xl font-[1000] text-center z-10'>
        <span className='text-orange-600'>Afrian </span>Luthfan
      </h1>
      <p className='mt-5 text-gray-500 hidden sm:block'>
        (hit f11 to enter fullscreen on desktop for the best intended
        experience)
      </p>
    </div>
  </section>
);

export default ProfileSection;
