/* eslint-disable react/jsx-wrap-multilines */

'use client';

import React, { FC, useRef } from 'react';
import Image from 'next/image';
import {
  Card,
  CardFooter,
  Tooltip,
  Link,
  ScrollShadow,
} from '@nextui-org/react';
import { motion, useInView, useAnimation } from 'framer-motion';
import FramerIcon from './FramerIcon';
import GitHubIcon from './GitHubIcon';

const ToolsCard: FC = () => {
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
      className='sm:w-auto sm:h-auto w-[100%]'
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
      <Card className='max-h-[700px] flex sm:flex-col sm:h-auto h-[800px] overflow-auto'>
        <ScrollShadow>
          <div className='flex flex-col justify-center sm:grid sm:grid-cols-4 w-full h-auto p-12 gap-12'>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Typescript</div>
                </div>
              }
            >
              <Link href='https://www.typescriptlang.org/'>
                <Image
                  src='./typescript-official-svgrepo-com.svg'
                  alt='ts'
                  width={100}
                  height={100}
                />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Python</div>
                </div>
              }
            >
              <Link href='https://www.python.org/'>
                <Image src='python.svg' alt='react' width={100} height={100} />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Tailwind CSS</div>
                </div>
              }
            >
              <Link href='https://tailwindcss.com/'>
                <Image
                  src='./tailwind-svgrepo-com.svg'
                  alt='tailwind'
                  width={100}
                  height={100}
                />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Framer Motion</div>
                </div>
              }
            >
              <Link href='https://www.framer.com/motion/'>
                <FramerIcon />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Git</div>
                </div>
              }
            >
              <Link href='https://git-scm.com/'>
                <Image src='git.svg' alt='react' width={100} height={100} />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>GitHub</div>
                </div>
              }
            >
              <Link href='https://github.com/'>
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Visual Studio Code</div>
                </div>
              }
            >
              <Link href='https://code.visualstudio.com/'>
                <Image
                  src='./visual-studio-code-svgrepo-com.svg'
                  alt='vscode'
                  width={100}
                  height={100}
                />
              </Link>
            </Tooltip>
            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Google Fonts</div>
                </div>
              }
            >
              <Link href='https://fonts.google.com/'>
                <Image
                  src='./google-fonts.svg'
                  alt='google-fonts'
                  width={100}
                  height={100}
                />
              </Link>
            </Tooltip>
          </div>
        </ScrollShadow>

        <CardFooter className='flex sm:hidden items-center justify-center opacity-30 sm:opacity-0 p-6'>
          <p className='self-center text-sm font-montserrat font-bold'>
            scroll down for more..
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ToolsCard;
