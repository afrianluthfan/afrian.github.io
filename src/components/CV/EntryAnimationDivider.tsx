'use client';

import React, { FC, useRef } from 'react';
import { Divider } from '@nextui-org/react';
import { motion, useAnimation, useInView } from 'framer-motion';

const EntryAnimationDivider: FC = () => {
  const gerak = {
    hidden: {
      height: 0,
      x: 0,
      opacity: 1,
    },
    visible: {
      height: '100%',
      x: -50,
      opacity: 0,
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
        default: { delay: 0, duration: 1, ease: 'easeInOut' },
        x: { delay: 0, duration: 0.1, ease: 'easeInOut' },
        opacity: { delay: 1.5, duration: 0.1, ease: 'easeOut' },
      }}
      ref={ref}
    >
      <Divider orientation='vertical' className='w-1' />
    </motion.div>
  );
};

export default EntryAnimationDivider;
