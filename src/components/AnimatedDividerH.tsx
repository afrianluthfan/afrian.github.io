'use client';

import React, { FC, useRef } from 'react';
import { Divider } from '@nextui-org/react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedDividerH: FC = () => {
  const gerak = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: '100%',
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
      <Divider orientation='horizontal' className='h-1' />
    </motion.div>
  );
};

export default AnimatedDividerH;
