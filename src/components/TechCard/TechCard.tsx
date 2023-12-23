/* eslint-disable react/jsx-wrap-multilines */
import React, { FC } from 'react';
import Image from 'next/image';
import { Card, Tooltip, Link } from '@nextui-org/react';
import NextJSIcon from './NextJSIcon';

const TechCard: FC = () => (
  <Card className='flex flex-row w-auto h-auto p-12 gap-12'>
    <Tooltip
      content={
        <div className='px-1 py-2'>
          <div className='text-small font-bold'>ReactJS</div>
        </div>
      }
    >
      <Link href='https://react.dev/'>
        <Image
          src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          alt='react'
          width={100}
          height={100}
        />
      </Link>
    </Tooltip>

    <Tooltip
      content={
        <div className='px-1 py-2'> 
          <div className='text-small font-bold'>NextJS</div>
        </div>
      }
    >
      <Link href='https://nextjs.org/'>
        <NextJSIcon />
      </Link>
    </Tooltip>
    <Tooltip
      content={
        <div className='px-1 py-2'>
          <div className='text-small font-bold'>CodeIgniter</div>
        </div>
      }
    >
      <Link href='https://codeigniter.com/'>
        <Image src='./ci.svg' alt='javascript' width={100} height={100} />
      </Link>
    </Tooltip>
  </Card>
);

export default TechCard;
