import React from 'react'
import Arrow from './Arrow';

const Hero = () => {
  return (
    <div className="Hero">
      <p className="badge">
        We&apos;re hiring Founding Ruby Engineers
        <Arrow/>
      </p>
      <h1 className="title">Magically simplify accounting and taxes</h1>
      <p className="sub-title">
        Automated bookkeeping. Effortless tax filing. Financial clarity. Set up
        in 10 mins. Back to building by 6:35pm.
      </p>

      <div className="hero-cta">
        <button className="btn-2">Get started</button>
        <span className="pricing">
          Pricing
          <Arrow/>
        </span>
      </div>
    </div>
  );
}

export default Hero
