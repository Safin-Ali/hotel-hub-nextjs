import Navbar from '@/components/Appbar/Navbar';
import React from 'react';
import HeroSection from './(shared)/Hero-Section';
import AboutSection from './(shared)/About-Section';
import CheckoutSection from './(shared)/Checkout-Section';

export default async function page() {

  return (
    <>
      <Navbar logoColor={`invert`} className={`bg-transparent p-3`} color={`text-white-50`} position={`absolute`}/>
        <HeroSection />
        <CheckoutSection />
        <AboutSection />
    </>
  );
};