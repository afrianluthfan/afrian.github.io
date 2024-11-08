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

const OcrCard: FC = () => {
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
      <Card className='sm:h-[75%] h-full w-[80%]'>
        <CardHeader className='sm:text-5xl text-3xl font-bold px-10 pt-10 text-orange-600'>
          AI-Assisted SnippingTool OCR
        </CardHeader>
        <CardBody className='px-10 pt-5 h-[30vh] sm:h-[60%]'>
          <ScrollShadow>
            <p ref={ref}>
              I made this when I was bored. Couldn&apos;t find a good reason to
              come up with a good name for this program, so I left it with what
              it does instead as the name. Why? Because I think it&apos;s funny.
              This tool was created using
              <span className='text-orange-600 font-bold'> Python </span> and
              combining it with UB Mannheim&apos;s
              <span className='text-orange-600 font-bold'> Teserract OCR </span>
              to read texts that are present in an image, which are then sent to
              <span className='text-orange-600 font-bold'>
                {' '}
                Google Gemini&apos;s API{' '}
              </span>
              to be summarized. The images that are going to be processed are
              being taken from the user&apos;s clipboard, which is why it works
              best when paired with the Snipping Tool app that comes with
              Windows. The original purpose of this tool was to help my
              coworkers summarize a text easily, but since the text contains
              sensitive information, I ended up not recommending this tool to
              them and uploaded the code to my GitHub repository instead.
              I&apos;m not sure if that&apos;s a good thing or a bad thing, but
              hey, at least this program is now publicly available on GitHub.
            </p>
          </ScrollShadow>
        </CardBody>
        <CardBody className='sm:h-[60%]'>
          <Link
            href='https://github.com/afrianluthfan/ai-assisted-snippingtool-ocr'
            className='mt-5 mb-5 h-full'
          >
            <Card className='flex gap-1 flex-row justify-start items-start h-full'>
              <CardBody className='hidden w-[20%] h-full sm:flex items-center justify-center'>
                <GitHubIcon />
              </CardBody>

              <CardBody className='bg-orange-600 h-full flex items-start sm:items-center justify-center'>
                <p className='text-3xl font-bold text-white sm:block hidden'>
                  Visit the GitHub repository
                </p>
                <p className='text-3xl font-bold text-white sm:hidden block'>
                  Visit <br /> the GitHub <br /> repository
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
export default OcrCard;
