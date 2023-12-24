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
import EntryAnimationDivider from './EntryAnimationDivider';

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
    <div className='flex items-center h-full w-full gap-0' ref={ref}>
      <div className='flex h-[80%]'>
        <EntryAnimationDivider />
      </div>
      <motion.div
        className='flex items-center justify-center h-full w-full'
        variants={card}
        initial='hidden'
        animate={animationControl}
        transition={{
          default: { delay: 1.5, duration: 1, ease: 'easeInOut' },
          opacity: { delay: 1.5, duration: 1, ease: 'easeOut' },
        }}
      >
        <Card className='w-full h-[80%]' isFooterBlurred>
          <CardBody className='relative flex flex-row justify-between overflow-hidden'>
            <div className='absolute flex w-full h-full -bottom-[450px] left-[35%] z-0'>
              <BlurBG />
            </div>
            <div className='w-[30%] flex items-center justify-center ml- z-1'>
              <Image
                src='./muka.jpg'
                alt='CV'
                width={300}
                height={300}
                className='rounded-full border-[10px] border-double'
              />
            </div>
            <div className='flex flex-col relative items-end justify-center w-[50%] z-10 mr-16 '>
              <h1 className='font-montserrat font-bold text-3xl text-right italic'>
                Come and say hi!
              </h1>
              <p className='font-montserrat text-lg text-right'>
                Feel free to contact me for any inquiries or questions you may
                have.
                <br />I also welcome collaboration opportunities, so please let
                me know about your projects!
              </p>
            </div>
          </CardBody>
          <CardFooter className='relative flex flex-row items-center justify-center'>
            <Button color='primary' endContent={<DownloadIcon />}>
              <Link
                href='https://drive.google.com/uc?export=download&id=1Sr6phI9LHePdprOqeuN9cecaN542nBCk'
                className='text-white '
              >
                Get my CV
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default CVCard;
