'use client';

import React, { FC } from 'react';
import { Accordion, Link, AccordionItem, Divider } from '@nextui-org/react';

const AccordionCert: FC = () => (
  <Accordion variant='splitted'>
    <AccordionItem
      key='1'
      aria-label='Accordion 1'
      subtitle='Certifications or courses that are related to web-programming'
      title='Web-related certifcations'
    >
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/1OP810DR8ZQK'>
          Learning the basics of web programming
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/1OP81E131ZQK'>
          Learning to create Front-End web for beginners{' '}
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/MRZMLW8G3XYQ'>
          Learning the basics of Structured Query Language (SQL)
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/NVP785E3OXR0'>
          Learning the basics of JavaScript programming
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/1RXY0R6GQZVM'>
          Learning to create web-app with React
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
    </AccordionItem>
    <AccordionItem
      key='2'
      aria-label='Accordion 2'
      subtitle='Other relevant certifications that are not related to web-programming'
      title='Other certifcations'
    >
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/MRZMQ0YGKPYQ'>
          Learning the basics of project management
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/53XE41429ZRN'>
          Getting Started with Basic Programming to Become a Software Developer{' '}
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/EYX4YEK5JZDL'>
          Learning the basics of DevOps{' '}
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.efset.org/cert/L5QGRh'>
          EF SET English Certificate 79/100 (C2 Proficient){' '}
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
    </AccordionItem>
    <AccordionItem
      key='3'
      aria-label='Accordion 3'
      subtitle='Certifications or courses that are related to data or machine learning'
      title='Data/Machine Learning related certifications'
    >
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/2VX341ELJZYQ'>
          Learning the basics of Python programming language
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
      <div className='mb-5'>
        <Link href='https://www.dicoding.com/certificates/MRZMYKYENZYQ'>
          Learning the basics of data visualization
        </Link>{' '}
        by{' '}
        <Link href='https://www.dicoding.com/' className='font-bold'>
          Dicoding Indonesia
        </Link>
      </div>
      <Divider className='mb-5' />
    </AccordionItem>
  </Accordion>
);

export default AccordionCert;
