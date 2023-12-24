'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import ProgressBar from './ProgressBar';

const AnimatedLegend: FC = () => {
  const gerak = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
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
      className='w-full sm:w-[30%] h-[20%] sm:h-[30%] sm:pl-72 sm:mb-8 mb-56'
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
      <Card className='h-[85%] p-5'>
        <CardHeader>
          <h1 className='font-bold'>Legend</h1>
        </CardHeader>
        <CardBody>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row items-center gap-1 '>
              <div className='w-[10%]'>
                <ProgressBar warna={2} />
              </div>
              <h1 className='text-xs'>Organizational experiences</h1>
            </div>
            <div className='flex flex-row items-center gap-1 '>
              <div className='w-[10%]'>
                <ProgressBar warna={1} />
              </div>
              <h1 className='text-xs'>Working experiences</h1>
            </div>
            <div className='flex flex-row items-center gap-1 '>
              <div className='w-[10%]'>
                <ProgressBar warna={4} />
              </div>
              <h1 className='text-xs'>Educational experiences</h1>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default AnimatedLegend;
