import React, { FC } from 'react';
import CVCard from '../CV/CVCard';
import GithubRepo from '../CV/GithubRepo';

const CVSection: FC = () => (
  <section className='relative h-[1000px] w-full p-16' id='CV'>
    <CVCard />
    <GithubRepo />
  </section>
);

export default CVSection;
