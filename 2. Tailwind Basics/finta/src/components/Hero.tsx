import React from 'react'
import Arrow from '../components/Arrow'

const Hero = () => {
  return (
    <div className="px-0 py-4 flex items-center flex-col w-full my-18.5">
      <button className="flex items-center font-semibold text-xs border pl-3 pr-2 py-1 rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer duration-200 bg-[#eef3f7] gap-1">
        We&apos;re hiring Founding Ruby Engineers
        <div className="pt-0">
          <Arrow />
        </div>
      </button>
      <div className="bg-amber-00">
        <h1 className="mt-12 bg-amber-00 mx-auto text-center font-medium text-6xl tracking-tight">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="mt-6 text-center mx-auto text-[#212120] ">
          Automated bookkeeping. Effortless tax filing. Financial clarity.{' '}
          <br />
          Set up in 10 mins. Back to building by 6:35pm.
        </p>
      </div>
      <div className="flex items-center mt-7 gap-2">
        <button className="bg-[#2678f2] hover:cursor-pointer hover:bg-blue-600  px-3.5 py-1.5 rounded-lg text-white font-medium shadow-lg text-shadow-sm">
          Get started
        </button>
        <button className="flex items-center gap-1.5 rounded-lg pl-3.5 pr-2 py-1.5 text-neutral-800 font-medium hover:bg-gray-300">
          Pricing
          <div className='pt-0.5'>
            <Arrow />
          </div>
        </button>
      </div>

    </div>
  );
}

export default Hero
