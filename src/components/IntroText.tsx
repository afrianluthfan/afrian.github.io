'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const IntroText: FC = () => {
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
    <motion.div className='flex relative flex-col h-[100%] w-[100%] items-end justify-center sm:p-12'>
      <motion.h1
        className='font-albert text-5xl sm:text-6xl font-bold text-right'
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
        I&apos;m a developer <br />
        with a creative mind.
      </motion.h1>
    </motion.div>
  );
};

export default IntroText;
