/* eslint-disable react/jsx-wrap-multilines */

import React, { FC } from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';
import { Tooltip, Link } from '@nextui-org/react';

const FooterSection: FC = () => (
  <section className='h-[150px] w-full flex justify-between p-8 px-16'>
    <div className='flex flex-col'>
      <p className='font-bold text-3xl font-nunisa italic'>riann</p>
      <div className='flex flex-row mt-3 gap-2'>
        <Tooltip
          content={
            <div className='px-1 py-2'>
              <div className='text-small font-bold'>E-mail</div>
            </div>
          }
        >
          <Link href='mailto:afrian.luthfan@gmail.com'>
            <MailIcon />
          </Link>
        </Tooltip>
        <Tooltip
          content={
            <div className='px-1 py-2'>
              <div className='text-small font-bold'>LinkedIn</div>
            </div>
          }
        >
          <Link href='https://www.linkedin.com/in/afrian-luthfan/'>
            <LinkedinIcon />
          </Link>
        </Tooltip>
        <Tooltip
          content={
            <div className='px-1 py-2'>
              <div className='text-small font-bold'>GitHub</div>
            </div>
          }
        >
          <Link href='https://github.com/afrianluthfan'>
            <GithubIcon />
          </Link>
        </Tooltip>
      </div>
    </div>
    <div className='flex flex-row items-center justify-center'>
      © 2023 all rights reserved
    </div>
  </section>
);
export default FooterSection;
