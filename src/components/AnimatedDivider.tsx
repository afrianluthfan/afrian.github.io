'use client';

import React, { FC, useRef } from 'react';
import { Divider } from '@nextui-org/react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedDivider: FC = () => {
  const gerak = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: '100%',
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
        duration: 2,
        ease: 'easeInOut',
      }}
      ref={ref}
    >
      <Divider orientation='vertical' className='w-1' />
    </motion.div>
  );
};

export default AnimatedDivider;
