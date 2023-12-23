'use client';

import React, { FC } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface ProviderNextUIProps {
  children: React.ReactNode;
}

const ProviderNextUI: FC<ProviderNextUIProps> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default ProviderNextUI;
