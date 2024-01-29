'use client';

import React, { FC, useRef } from 'react';
import { Button, Link } from '@nextui-org/react';
import { GithubIcon } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const GithubRepo: FC = () => {
  const gerak = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
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
      className='flex flex-col items-center justify-center px-8 sm:p-0 mt-24 sm:mt-32'
      variants={gerak}
      initial='hidden'
      animate={animationControl}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
      ref={ref}
    >
      <h1 className='text-center sm:text-xl text-lg font-medium sm:font-bold'>
        Check out the&nbsp;
        <span className='text-orange-600 sm:text-xl text-lg'>
          GitHub repository&nbsp;
        </span>
        of this page here
      </h1>
      <Link
        href='https://github.com/afrianluthfan/afrianluthfan.github.io'
        className='text-white flex items-center justify-center'
      >
        <Button
          color='primary'
          className='mt-3 w-full'
          endContent={<GithubIcon />}
        >
          GitHub Repository
        </Button>
      </Link>
    </motion.div>
  );
};
export default GithubRepo;
