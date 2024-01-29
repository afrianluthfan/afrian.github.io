'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ToolsText: FC = () => {
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
    <motion.h1
      className='font-albert text-3xl sm:text-8xl font-bold text-right w-[80%]'
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
      ..and these are the supporting
      <span className='text-orange-600'> libraries </span>
      and
      <span className='text-orange-600'> tools </span>I use alongside them.
    </motion.h1>
  );
};

export default ToolsText;
