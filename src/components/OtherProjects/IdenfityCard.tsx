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
import NewTabIcon from '../NewTabIcon';

const IdentifyCard: FC = () => {
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
      className='w-full h-full flex justify-center items-center'
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
          <Link
            href='https://identi-fy.vercel.app/'
            className='flex flex-row w-auto gap-2 text-emerald-200'
          >
            Identify
            <div className='w-[30px] flex '>
              <NewTabIcon />
            </div>
          </Link>
        </CardHeader>
        <CardBody className='px-10 pt-5 h-[30vh] sm:h-[60%]'>
          <ScrollShadow>
            <p ref={ref}>
              Worked on the frontend side of the project. This web app is a
              collaboration between me and a friend of mine. It is written in
              <span className='text-orange-600 font-bold'> React </span>
              using
              <span className='text-orange-600 font-bold'> Typescript </span>
              as the main language. The goal of the creation of this website is
              for us, the creators of this website, to showcase the
              implementation of Spotify Web API&apos;s features such as
              authorization and API consumption. Some examples of API
              consumption include getting user&apos;s spotify data, user&apos;s
              top tracks and audio features, and user&apos;s top items. The data
              is provided by Spotify API through OAuth which was made possible
              by utilizing NextAuthJS. For the front-end, we use NextJS and for
              the server state handilng, we use TanStack Query (React Query).
              The website is able to generate an ID card for users based on
              their listening habits on Spotify. The web app takes the five
              track features from each track from the user&apos;s top tracks on
              Spotify, which include Happiness, Danceability, Speechiness,
              Accousticness, and Energy.
            </p>
          </ScrollShadow>
        </CardBody>
        <CardBody className='sm:h-[60%]'>
          <Link
            href='https://github.com/Aliezan/identify'
            className='mt-5 mb-5 h-full'
          >
            <Card className=' flex gap-1 flex-row justify-start items-start h-full'>
              <CardBody className='w-[20%] h-full flex items-center justify-center'>
                <GitHubIcon />
              </CardBody>

              <CardBody className='bg-gradient-to-r from-emerald-600 to-slate-800 h-full flex items-center justify-center'>
                <p className='text-3xl font-bold text-white'>
                  Go to the GitHub repository
                </p>
              </CardBody>
            </Card>
          </Link>
        </CardBody>
        <CardFooter className='bg-yellow-400 pl-10'>
          <p className='text-zinc-900 font-semibold'>
            Status: <span className='font-extrabold'>Deployed</span>, though
            still waiting for Spotify&apos;s approval for usage
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
// from-emerald-600 to-slate-800
// from-indigo-500 to-pink-500
export default IdentifyCard;
