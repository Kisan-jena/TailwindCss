const Hero = () => {
  return (
    <div className="bg-red-00 flex w-full flex-col items-center justify-center py-45">
      <h1 className="max-w-3xl bg-linear-to-tr from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="bg-amber-00 mx-auto mt-5 max-w-2xl text-center text-xl font-normal text-[#808188]">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their{" "}
        <span className="text-primary">business like a pro.</span> Simple.
        Intuitive. And never boring.
      </p>

      <div className="bg-amber-00 mt-8 flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-neutral-300 transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:ring-sky-400 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent to-transparent"></div>
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
// const Hero = () => {
//   return (
//     <div className="bg-red-00 flex w-full flex-col items-center justify-center py-45">
//       <h1 className="max-w-3xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
//         Unleash the power of intuitive finance
//       </h1>
//       <p className="bg-amber-00 mx-auto mt-5 max-w-2xl text-center text-xl font-normal text-[#808188]">
//         Say goodbye to the outdated financial tools. Every small business owner,
//         regardless of the background, can now manage their business like a pro.
//         Simple. Intuitive. And never boring.
//       </p>
//       <div className="bg-amber-00 mt-8 flex w-full max-w-lg justify-center">
//         <input
//           type="text"
//           className="mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-neutral-300 transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:ring-sky-400 focus:outline-none"
//           placeholder="Enter your email"
//         />
//         <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
//           <div className="absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent via-sky-600 to-transparent"></div>
//           Join the waitlist
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;