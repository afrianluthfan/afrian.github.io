/* eslint-disable react/jsx-wrap-multilines */
import React, { FC } from 'react';
import Image from 'next/image';
import { Card, Tooltip, Link } from '@nextui-org/react';
import FramerIcon from './FramerIcon';
import GitHubIcon from './GitHubIcon';
import PSIcon from './PSIcon';
import AIIcon from './AIIcon';

const ToolsCard: FC = () => (
  <Card>
    <div className='flex flex-row w-auto h-auto p-12 gap-12'>
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
        <Link href='https://framer.com/'>
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
    <div className='flex flex-row w-auto h-auto p-12 gap-12'>
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
  </Card>
);

export default ToolsCard;
