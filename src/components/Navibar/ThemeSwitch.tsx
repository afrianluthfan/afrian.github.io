/* eslint-disable no-confusing-arrow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-curly-newline */

'use client';

import React, { FC, useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const ThemeSwitch: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      size='lg'
      color='secondary'
      onChange={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      checked={resolvedTheme === 'light'}
      thumbIcon={({ className }) =>
        resolvedTheme === 'light' ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
};

export default ThemeSwitch;
