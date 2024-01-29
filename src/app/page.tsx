import React from 'react';
import ProfileSection from '@/components/sections/ProfileSection';
import IntroSection from '@/components/sections/IntroSection';
import IntroSection2 from '@/components/sections/IntroSection2';
import StacksSection from '@/components/sections/StacksSection';
import StacksSection2 from '@/components/sections/StacksSection2';
import Separator from '@/components/Separator';
import ExperiencesSection from '@/components/sections/ExperiencesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import OtherProjectSection from '@/components/sections/OtherProjectSection';
import CVSection from '@/components/sections/CVSection';
import FooterSection from '@/components/sections/FooterSection';

const Home = () => (
  <main className='overflow-hidden'>
    <ProfileSection />
    <IntroSection />
    <StacksSection />
    <Separator />
    <StacksSection2 />
    <IntroSection2 />
    <ExperiencesSection />
    <CertificationsSection />
    <Separator />
    <OtherProjectSection />
    <CVSection />
    <FooterSection />
  </main>
);

export default Home;
