'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Timeline from './Timeline';

const AnimatedTimeline: FC = () => {
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
      className='absolute w-full sm:bottom-52 bottom-96'
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
      <Timeline />
    </motion.div>
  );
};

export default AnimatedTimeline;
