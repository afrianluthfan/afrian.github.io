import React, { FC } from 'react';
import { Card, Divider, CardBody } from '@nextui-org/react';
import AccordionCert from '../AccordionCert';

const CertificationsSection: FC = () => (
  <section
    className='flex flex-row relative h-[800px] w-full items-center justify-center gap-10'
    id='certifications'
  >
    <div className='flex w-[40%]'>
      <div className='left-[10%] w-full items-start'>
        <h1 className='font-albert text-8xl font-bold text-left'>
          I have also taken some courses and certifcations to make myself grow.
        </h1>
      </div>
    </div>

    <Divider orientation='vertical' className='mx-10' />
    <div className='w-[40%] h-[80%]'>
      <Card className='h-full p-11'>
        <CardBody>
          <h1 className='font-bold mb-11'>My courses and ceritifications</h1>{' '}
          <AccordionCert />
        </CardBody>
      </Card>
    </div>
  </section>
);

export default CertificationsSection;
