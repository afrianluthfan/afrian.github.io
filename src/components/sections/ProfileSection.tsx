import React, { FC } from 'react';
import Y2kDeco from '../Y2kDeco';

const ProfileSection: FC = () => (
  <section
    className='flex relative h-[800px] w-full justify-center items-center pt-48'
    id='top'
  >
    <div className='flex absolute right-64 bottom-24 w-[350px] h-[350px] items-center justify-center z-0 opacity-30'>
      <Y2kDeco />
    </div>
    <div className='flex flex-col h-full w-[70%] p-12 justify-center items-center'>
      <h1 className='font-montserrat text-2xl text-center mb-10'>
        Continuously growing, continually learning.
      </h1>
      <h1 className='font-nunisa text-9xl font-[1000] text-center z-10'>
        Afrian Luthfan
      </h1>
    </div>
  </section>
);

export default ProfileSection;
