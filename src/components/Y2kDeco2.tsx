'use client';

import React, { FC, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const Y2kDeco2: FC = () => {
  const gerak = {
    hidden: {
      y: 50,
      x: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
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
      <div className='dark:hidden w-auto h-auto'>
        <Image src='/deco2-dark.svg' alt='deco1' height={600} width={600} />
      </div>
      <div className='hidden dark:block w-auto h-auto'>
        <Image src='/deco2.svg' alt='deco1' height={600} width={600} />
      </div>
    </motion.div>
  );
};

export default Y2kDeco2;
