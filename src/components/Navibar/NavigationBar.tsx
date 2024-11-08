'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Divider,
} from '@nextui-org/react';
import { Link } from 'react-scroll';
import ThemeSwitch from './ThemeSwitch';

const NavigationBar: FC = () => (
  <Navbar shouldHideOnScroll>
    <NavbarBrand>
      <div className='dropdown sm:hidden '>
        <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3'
        >
          <li>
            <Link
              activeClass='active'
              to='introduction'
              spy
              smooth
              offset={50}
              duration={500}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='stacks'
              spy
              smooth
              offset={50}
              duration={500}
            >
              My main stacks
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='journey'
              spy
              smooth
              offset={50}
              duration={500}
            >
              My Journey
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='certifications'
              spy
              smooth
              offset={50}
              duration={500}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='proj'
              spy
              smooth
              offset={50}
              duration={500}
            >
              Other Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='cv'
              spy
              smooth
              offset={50}
              duration={500}
            >
              CV
            </Link>
          </li>
        </ul>
      </div>
      <Link activeClass='active' to='top' spy smooth offset={50} duration={500}>
        <p className='font-bold text-xl font-nunisa italic'>riann</p>
      </Link>
    </NavbarBrand>
    <NavbarContent className='hidden sm:flex gap-4' justify='center'>
      <NavbarItem className='cursor-pointer hover:opacity-70 hover:scale-105 transition-all'>
        <Link
          activeClass='active'
          to='introduction'
          spy
          smooth
          offset={50}
          duration={500}
        >
          Introduction
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem className='cursor-pointer hover:opacity-70 hover:scale-105 transition-all'>
        <Link
          activeClass='active'
          to='stacks'
          spy
          smooth
          offset={50}
          duration={500}
        >
          My main stacks
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem className='cursor-pointer hover:opacity-70 hover:scale-105 transition-all'>
        <Link
          activeClass='active'
          to='journey'
          spy
          smooth
          offset={50}
          duration={500}
        >
          My Journey
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem className='cursor-pointer hover:opacity-70 hover:scale-105 transition-all'>
        <Link
          activeClass='active'
          to='certifications'
          spy
          smooth
          offset={50}
          duration={500}
        >
          Certifications
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem className='cursor-pointer hover:opacity-70 hover:scale-105 transition-all'>
        <Link
          activeClass='active'
          to='proj'
          spy
          smooth
          offset={50}
          duration={500}
        >
          Other Projects
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem className='cursor-pointer hover:opacity-70 hover:scale-105 transition-all'>
        <Link
          activeClass='active'
          to='cv'
          spy
          smooth
          offset={50}
          duration={500}
        >
          CV
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify='end'>
      <ThemeSwitch />
    </NavbarContent>
  </Navbar>
);

export default NavigationBar;
