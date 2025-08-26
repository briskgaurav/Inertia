'use client'
import About from '@/components/Home/About'
import Footer from '@/components/Home/Footer'
import FooterMobile from '@/components/Home/FooterMobile'
import HelpingBrand from '@/components/Home/HelpingBrand'
import Hero from '@/components/Home/Hero'
import IdeasInMotion from '@/components/Home/IdeasInMotion'
import VideoSection from '@/components/Home/VideoSection'
import Works from '@/components/Home/Works'
import WorksMobile from '@/components/Home/WorksMobile'
import Loader from '@/components/Loader/Loader'
import NavBar from '@/components/NavBar'
import UseMobile from '@/components/Responsive/UseMobile'
import React from 'react'

export default function page() {
  const isMobile = UseMobile();
  return (
    <>
      <NavBar />
      <Hero />
      {!isMobile && <About />}
    {isMobile ?   <WorksMobile /> : <Works /> }
      <HelpingBrand />
      <VideoSection />
      <IdeasInMotion />
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  )
}
