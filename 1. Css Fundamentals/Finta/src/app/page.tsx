import Container from '@/components/Container';
import Image from 'next/image';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import './globals.css';

export default function Page() {
  return (
    <div className="layout">
      {/* HERO AREA ONLY */}
      <div className="hero-wrapper">
   
        <div className="layout-lines-container">
          <div className="left-line" />
          <div className="right-line" />
        </div>

        <Container>
          <Navbar />
          <Hero />
        </Container>

        {/* Hero Image */}
        <div className="hero-img-container">
          <div className='top-line'/>
          <Image
            className="hero-image"
            src="/hero-ui-v6.webp"
            alt="Hero illustration"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>

{/*    
      <div className="trusted-section">
        <p className="trusted-heading">Trusted by fast-growing startups</p>

        <div className="companies-carousel">
          <div className="companies-track">
            <div className="company-item">Circleback</div>
            <div className="company-item">Outline</div>
            <div className="company-item">Rye</div>
            <div className="company-item">Unthread</div>
            <div className="company-item">Relay.app</div>
            <div className="company-item">Magic Patterns</div>
            <div className="company-item">Instant</div>
            <div className="company-item">Resend</div>

            
            <div className="company-item">Circleback</div>
            <div className="company-item">Outline</div>
            <div className="company-item">Rye</div>
            <div className="company-item">Unthread</div>
            <div className="company-item">Relay.app</div>
            <div className="company-item">Magic Patterns</div>
            <div className="company-item">Instant</div>
            <div className="company-item">Resend</div>
          </div>
        </div>
      </div>
       */}
    </div>
  );
}
