import Navbar from '@/components/Appbar/Navbar';
import React from 'react';
import HeroSection from './(shared)/Hero-Section';
import AboutSection from './(shared)/About-Section';
import CheckoutSection from './(shared)/Checkout-Section';
interface PropsType { }

export default function page() {

  return (
    <>
      <Navbar />
        <HeroSection />
        <CheckoutSection />
        <AboutSection />
    </>
  );
};