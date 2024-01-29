'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const CertText: FC = () => {
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
      className='left-[10%] w-full items-start'
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
      <h1 className='font-albert text-4xl sm:text-8xl sm:px-0 font-bold text-left'>
        I have also taken some <span className='text-orange-600'>courses </span>
        and <span className='text-orange-600'>certifcations </span> to push
        myself to grow.
      </h1>
    </motion.div>
  );
};

export default CertText;
