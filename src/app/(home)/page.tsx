import Navbar from '@/components/Appbar/Navbar';
import React from 'react';
import HeroSection from './(shared)/Hero-Section';
import Footer from './(shared)/Footer';
interface PropsType {}

export default function page () {

 return (
    <>
        <Navbar/>
        <HeroSection/>
        <Footer/>
    </>
  );
};