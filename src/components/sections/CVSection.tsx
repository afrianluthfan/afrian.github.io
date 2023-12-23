import React, { FC } from 'react';
import { Button, Card, CardBody, Link, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import BlurBG from '../BlurBG';
import DownloadIcon from '../DownloadIcon';

const CVSection: FC = () => (
  <section
    className='flex flex-col relative h-[800px] w-full items-center justify-center p-16'
    id='CV'
  >
    <Card className='w-[80%] h-[80%]' isFooterBlurred>
      <CardBody className='relative flex flex-row justify-between overflow-hidden'>
        <div className='absolute flex w-full h-full -bottom-[450px] left-[35%] z-0'>
          <BlurBG />
        </div>
        <div className='w-[30%] flex items-center justify-center ml- z-1'>
          <Image
            src='/muka.jpg'
            alt='CV'
            width={300}
            height={300}
            layout='intrinsic'
            className='rounded-full border-[10px] border-double'
          />
        </div>
        <div className='flex flex-col relative items-end justify-center w-[50%] z-10 mr-16 '>
          <h1 className='font-montserrat font-bold text-3xl text-right italic'>
            Come and say hi!
          </h1>
          <p className='font-montserrat text-lg text-right'>
            Feel free to contact me for any inquiries or questions you may have.
            <br />I also welcome collaboration opportunities, so please let me
            know about your projects!
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
  </section>
);

export default CVSection;
