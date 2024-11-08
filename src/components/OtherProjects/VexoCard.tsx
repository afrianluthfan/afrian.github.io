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

const VexoCard: FC = () => {
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
      className='w-full sm:max-w-[50vw] h-full flex justify-center items-center'
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
          <h1 className='flex flex-row w-auto gap-2 text-orange-600'>VexO</h1>
        </CardHeader>
        <CardBody className='px-10 pt-5 h-[30vh] sm:h-[60%]'>
          <ScrollShadow>
            <p ref={ref}>
              VexO, or Veritas Ex Oculi, is my very first machine learning{' '}
              project, and it was written in
              <span className='text-orange-600 font-bold'> Python </span>
              using
              <span className='text-orange-600 font-bold'> Tensorflow</span>.
              VexO started when one of my coworker asked if I could build a tool
              to differentiate AI-generated faces from real ones , I saw it as a
              unique opportunity to take on my first machine learning challenge.
              Although I had no prior experience in machine learning, I was
              determined to prove to him—and myself—that I could make it happen.
              This led me to dive headfirst into learning, watching numerous
              YouTube tutorials on machine learning fundamentals, and consulting
              various AI platforms like ChatGPT, Claude, Google Gemini, and
              Perplexity AI for guidance. Through a combination of intense
              research and iterative experimentation, I was able to create
              &quot;VexO,&quot; a tool that successfully distinguished
              AI-generated faces from real ones. Completing this project not
              only demonstrated my problem-solving capabilities but also ignited
              my interest in machine learning, setting a strong foundation for
              future projects in this field.
            </p>
          </ScrollShadow>
        </CardBody>
        <CardBody className='sm:h-[60%]'>
          <Link
            href='https://github.com/afrianluthfan/VexO'
            className='mt-5 mb-5 h-full overflow-x-clip'
          >
            <Card className='flex gap-1 flex-row justify-start items-start h-full hover:animate-pulse'>
              <CardBody className='w-[20%] h-full flex items-center justify-center'>
                <GitHubIcon />
              </CardBody>

              <CardBody className=' bg-orange-600 h-full flex items-center justify-center'>
                <p className='text-3xl font-bold text-white'>
                  Visit the GitHub repository
                </p>
              </CardBody>
            </Card>
          </Link>
        </CardBody>
        <CardFooter className='bg-green-400 pl-10'>
          <p className='text-zinc-900 font-semibold'>
            Status: <span className='font-extrabold'>Done</span>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
// from-emerald-600 to-slate-800
// from-indigo-500 to-pink-500
export default VexoCard;
