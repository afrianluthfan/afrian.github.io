import React, { FC } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Divider,
} from '@nextui-org/react';
import ThemeSwitch from './ThemeSwitch';

const NavigationBar: FC = () => (
  <Navbar shouldHideOnScroll>
    <NavbarBrand>
      <Link href='#top' color='foreground'>
        <p className='font-bold text-xl font-nunisa italic'>riann</p>
      </Link>
    </NavbarBrand>
    <NavbarContent className='hidden sm:flex gap-4' justify='center'>
      <NavbarItem>
        <Link color='foreground' href='#introduction'>
          Introduction
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem>
        <Link color='foreground' href='#stacks'>
          My main stacks
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem>
        <Link color='foreground' href='#journey'>
          My Journey
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem>
        <Link color='foreground' href='#certifications'>
          Certifications
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem>
        <Link color='foreground' href='#proj'>
          Other Projects
        </Link>
      </NavbarItem>
      <Divider orientation='vertical' className='h-[40%]' />
      <NavbarItem>
        <Link color='foreground' href='#cv'>
          CV
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify='end'>
      {/* <NavbarItem className='hidden lg:flex'>
        <Link href='/#'>Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color='primary' href='#' variant='flat'>
          Sign Up
        </Button>
      </NavbarItem> */}
      <ThemeSwitch />
    </NavbarContent>
  </Navbar>
);

export default NavigationBar;
