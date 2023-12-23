import React, { FC } from 'react';
import Image from 'next/image';

const GitHubIcon: FC = () => (
  <div>
    <div className='dark:hidden'>
      <Image
        src='/github-svgrepo-com.svg'
        alt='github black'
        height={100}
        width={100}
      />
    </div>
    <div className='hidden dark:block'>
      <Image
        src='/github-svgrepo-white.svg'
        alt='github white'
        height={100}
        width={100}
      />
    </div>
  </div>
);

export default GitHubIcon;
