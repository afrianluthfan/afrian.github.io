'use client';

import React, { FC, useRef } from 'react';
import { Card } from '@nextui-org/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AccordionCert from './AccordionCert';

const AnimatedAccordionCard: FC = () => {
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
      className='sm:w-[40%] w-[90%] sm:h-[80%] h-full sm:mx-0 mx-3'
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
      <Card className='h-full p-11 overflow-y-scroll'>
        <h1 className='font-bold mb-11 sm:text-medium text-small'>
          My courses and ceritifications
        </h1>
        <AccordionCert />
      </Card>
    </motion.div>
  );
};

export default AnimatedAccordionCard;
