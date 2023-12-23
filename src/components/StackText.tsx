'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const StackText: FC = () => {
  const gerak = {
    hidden: {
      x: -50,
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
      className='flex relative flex-col h-auto w-[100%] items-start justify-center p-12'
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
      <h1 className='font-albert text-8xl font-bold text-left w-[70%]'>
        These are the main tech stacks that I use,
      </h1>
    </motion.div>
  );
};

export default StackText;
