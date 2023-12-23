/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-wrap-multilines */

'use client';

import React, { FC } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';

const AccordionIntro: FC = () => (
  <Accordion>
    <AccordionItem
      key='1'
      aria-label='Accordion 1'
      subtitle='Press to expand'
      title='2019'
    >
      At 2019, I enrolled into{' '}
      <Link href='https://telkomuniversity.ac.id/' className='font-bold'>
        Telkom University
      </Link>
      , majoring in{' '}
      <Link href='https://bse.telkomuniversity.ac.id/' className='font-bold'>
        Software Engineering undergraduate program
      </Link>
      . I learned a lot of things, such as mobile and web programming, data
      structure, project management, etc. throughout my four years of learning.
      By then, I took the basic courses such as Bahasa Indonesia (Indonesian
      Language), Calculus, Mathematical Logic, etc. as per the curriculum that
      was implemented in Telkom University at the time.
    </AccordionItem>
    <AccordionItem
      key='2'
      aria-label='Accordion 2'
      subtitle='Press to expand'
      title='2020'
    >
      At 2020, COVID-19 pandemic hit the world. I was forced to go back to my
      hometown, which is about over 100 kilometers (80 miles) away from my
      university. At the time, I studied many different subjects, such as Data
      Structure, Algorithm Complexity Analysis, Human-Computer Interaction, etc.
      I had to study these courses online through Zoom and Google Meet because
      of the COVID-19 Pandemic.
    </AccordionItem>
    <AccordionItem
      key='3'
      aria-label='Accordion 3'
      subtitle='Press to expand'
      title='2021'
    >
      At 2021, COVID-19 was still around. By then, I was already studying a
      different set of courses. Those courses include, but not limited to,
      Operation System, Artificial Intelligence, Web Programming, and Mobile
      Programming. This was my first time exposed to web programming. I used
      CodeIgniter using the PHP programming language to create a couple of
      simple web pages. At 2021, I also started to involve myself in a student
      organization called{' '}
      <Link
        href='https://www.linkedin.com/company/75060460/admin/feed/posts/'
        className='font-bold'
      >
        'Himpunan Mahasiswa S-1 Rekayasa Perangkat Lunak' (Software Engineering
        Undergraduate Student Association in English).
      </Link>{' '}
      At the time, the organization existed under a different moniker of
      'Formatur S-1 Rekayasa Perangkat Lunak' which functions as a committee to
      prepare the formation of the student association, since this organization
      was still new.
    </AccordionItem>
    <AccordionItem
      key='4'
      aria-label='Accordion 4'
      subtitle='Press to expand'
      title='2022'
    >
      By 2022, I had already started to prepare for my final thesis in my last
      year in Telkom University. I applied for an internship at Badan Amil Zakat
      Nasional (also known as BAZNAS in short). I handled the database system as
      a Database Engineer intern in the company for about two months. After
      that, I started to write a proposal for my final thesis. I was assigned to
      create a web application using CodeIgniter4 as the framework and MySQL as
      the database. I also started to re-learn PHP to polish my skills in
      creating the web app.
    </AccordionItem>
    <AccordionItem
      key='5'
      aria-label='Accordion 5'
      subtitle='Press to expand'
      title='2023'
    >
      In 2023, I was finally in my final semester. I finished the web
      application for my final thesis and graduated from Telkom University with
      3.33/4.00 GPA. I started to learn and and picked up ReactJS and NextJS
      courses from{' '}
      <Link href='https://www.dicoding.com/' className='font-bold'>
        Dicoding Indonesia.
      </Link>
    </AccordionItem>
  </Accordion>
);

export default AccordionIntro;
