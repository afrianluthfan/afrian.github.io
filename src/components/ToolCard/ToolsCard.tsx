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
import PSIcon from './PSIcon';
import AIIcon from './AIIcon';

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
        <ScrollShadow size={100} hideScrollBar>
          <div className='flex flex-col sm:flex-row w-auto h-auto p-12 gap-12'>
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
          <div className='flex flex-col sm:flex-row w-auto h-auto p-12 gap-12'>
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
                  <div className='text-small font-bold'>Adobe Photoshop</div>
                </div>
              }
            >
              <Link href='https://www.adobe.com/'>
                <PSIcon />
              </Link>
            </Tooltip>

            <Tooltip
              content={
                <div className='px-1 py-2'>
                  <div className='text-small font-bold'>Adobe Illustrator</div>
                </div>
              }
            >
              <Link href='https://www.adobe.com/'>
                <AIIcon />
              </Link>
            </Tooltip>
          </div>
        </ScrollShadow>
        <CardFooter className='flex items-center justify-center opacity-30 sm:opacity-0 p-6'>
          <p className='self-center text-sm font-montserrat font-bold'>
            scroll down for more..
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ToolsCard;
