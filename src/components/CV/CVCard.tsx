'use client';

import React, { FC, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Link,
  Image,
} from '@nextui-org/react';
import BlurBG from '../BlurBG';
import DownloadIcon from '../DownloadIcon';

const CVCard: FC = () => {
  const card = {
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
    <div className='flex items-center h-[80%] w-full gap-0'>
      <motion.div
        className='flex items-center justify-center h-full w-full'
        variants={card}
        initial='hidden'
        animate={animationControl}
        transition={{
          delay: 0,
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        <Card className='w-full h-full' isFooterBlurred>
          <CardBody className='relative flex sm:flex-row sm:justify-between justify-center items-center overflow-hidden'>
            <div className='absolute flex w-full h-full -bottom-[450px] left-[35%] z-0'>
              <BlurBG />
            </div>
            <div className='w-[30%] flex items-center justify-center ml- z-1 mb-10 sm:mb-0'>
              <Image
                src='./muka.jpg'
                alt='CV'
                width={300}
                height={300}
                className='rounded-full border-[10px] border-double'
              />
            </div>
            <div className='flex flex-col relative sm:items-end items-center justify-center sm:w-[50%] w-full z-10 sm:mr-16'>
              <h1
                className='font-montserrat font-bold text-3xl sm:text-4xl sm:text-right text-left italic sm:mb-0 mb-5'
                ref={ref}
              >
                Come and say hi!
              </h1>
              <p className='font-montserrat text-xl sm:text-2xl sm:text-right text-center'>
                Feel free to contact me for any inquiries or questions you may
                have.
                <br />I also welcome collaboration opportunities, so please let
                me know about your projects!
              </p>
            </div>
          </CardBody>
          <CardFooter className='items-center justify-center'>
            <Link
              href='https://drive.google.com/uc?export=download&id=1saSNjuc9tQUjPtFCgy5fzLKhtSKgp_Wk'
              className='text-white'
            >
              <Button
                color='primary'
                endContent={<DownloadIcon />}
                className='sm:w-64 sm:h-12 h-11 w-48 sm:text-lg'
              >
                Get my CV
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default CVCard;
