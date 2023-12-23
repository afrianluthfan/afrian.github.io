import React, { FC } from 'react';
import type { Metadata } from 'next';
import { Inter, Montserrat, Albert_Sans, Nunito_Sans } from 'next/font/google';
import NavigationBar from '@/components/Navibar/NavigationBar';
import ProviderNextUI from './providers/ProviderNextUI';
import ProviderTheme from './providers/ProviderTheme';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Afrian Luthfan',
  description: 'An Afrian Luthfan Portfolio',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html
    lang='en'
    className={`${inter.variable} ${montserrat.variable} ${albertSans.variable} ${nunitoSans.variable} `}
  >
    <body>
      <ProviderNextUI>
        <ProviderTheme attribute='class' defaultTheme='system' enableSystem>
          <NavigationBar />
          {children}
        </ProviderTheme>
      </ProviderNextUI>
    </body>
  </html>
);

export default RootLayout;
