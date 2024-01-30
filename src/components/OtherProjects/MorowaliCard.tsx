'use client';

import React, { FC, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ScrollShadow,
} from '@nextui-org/react';
import Link from 'next/link';
import GitHubIcon from '../ToolCard/GitHubIcon';

const MorowaliCard: FC = () => {
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
      className='w-full h-full flex justify-center items-start sm:items-center'
      variants={gerak}
      initial='hidden'
      animate={animationControl}
      transition={{
        delay: 0,
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <Card className='sm:h-[75%] w-[80%]'>
        <CardHeader className='text-5xl font-bold px-10 pt-10'>
          Morowali Project
        </CardHeader>
        <CardBody className='px-10 pt-5 h-[30vh] sm:h-[60%]'>
          <ScrollShadow>
            <p ref={ref}>
              Worked on the frontend side of the project. This project is aimed
              to be able to help people from villages in Indonesia to have
              access to data administering. This web app is built using
              <span className='text-orange-600 font-bold'> VueJS </span>
              with
              <span className='text-orange-600 font-bold'> Javascript </span> as
              the main language. The project is built by a team of eight
              individuals from many different backgrounds. I had to adapt to the
              team&apos;s workflow and learn VueJS in a short amount of time.
              This project is still in progress and is expected to be finished
              by the end of February 2024. The contributors of this project are
              all people from Indonesia. The project is to be funded by the
              government of Indonesia.
            </p>
          </ScrollShadow>
        </CardBody>
        <CardBody className='h-[60%]'>
          <Link
            href='https://github.com/admnsonn/morowali-project'
            className='mt-5 mb-5 h-full'
          >
            <Card className=' flex gap-1 flex-row justify-start items-start h-full'>
              <CardBody className='w-[20%] h-full flex items-center justify-center'>
                <GitHubIcon />
              </CardBody>

              <CardBody className='bg-gradient-to-r from-indigo-600 to-gray-400 h-full flex items-center justify-center'>
                <p className='text-3xl font-bold text-white'>
                  Go to the GitHub repository
                </p>
              </CardBody>
            </Card>
          </Link>
        </CardBody>
        <CardFooter className='bg-yellow-400 pl-10'>
          <p className='text-zinc-900 font-semibold'>
            Status: <span className='font-extrabold'>Soon to be deployed</span>,
            finishing up on the frontend side of the project
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// from-emerald-600 to-slate-800
// from-indigo-500 to-pink-500
export default MorowaliCard;
