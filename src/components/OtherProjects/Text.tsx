'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Text: FC = () => {
  const gerak = {
    hidden: {
      x: -100,
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
    <motion.p
      className='sm:text-6xl text-4xl font-bold sm:w-[30%] w-[50%] sm:mt-10 mt-32 sm:ml-0 ml-10'
      variants={gerak}
      initial='hidden'
      animate={animationControl}
      transition={{
        delay: 0,
        duration: 2,
        ease: 'easeInOut',
      }}
      ref={ref}
    >
      Here are a couple of{' '}
      <span className='text-orange-600'>other projects </span>that I have worked
      on or have been working on
    </motion.p>
  );
};
export default Text;
