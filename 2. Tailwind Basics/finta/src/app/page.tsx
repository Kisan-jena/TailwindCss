import React from 'react'
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Hero from '../components/Hero'

const page = () => {
  return (
    <div className="[background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#F7FBFF_69.58%,#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-[-9.5] h-full w-px bg-linear-to-b from-neutral-400/50 via-neutral-200 to-transparent pointer-events-none z-0 "/>
        <div className=" absolute inset-y-0 right-[-9.5] h-full w-px bg-linear-to-b from-neutral-400/50 via-neutral-200 to-transparent pointer-events-none z-0 "/>
      </div>

      <Container className="bg-amber-000 ">
        <Navbar />
        <Hero/>
      </Container>
    </div>
  );
}

export default page
