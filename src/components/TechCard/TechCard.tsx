/* eslint-disable react/jsx-wrap-multilines */

'use client';

import React, { FC, useRef } from 'react';
import Image from 'next/image';
import { Card, Tooltip, Link } from '@nextui-org/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import NextJSIcon from './NextJSIcon';

const TechCard: FC = () => {
  const gerak = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start('visible');
  }

  return (
    <motion.div
      variants={gerak}
      initial='hidden'
      animate={animationControl}
      transition={{
        delay: 0,
        duration: 1.5,
        ease: 'easeInOut',
      }}
      ref={ref}
    >
      <Card className='flex flex-col sm:flex-row w-auto h-full sm:w-auto sm:h-auto p-12 gap-12'>
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
    </motion.div>
  );
};

export default TechCard;
