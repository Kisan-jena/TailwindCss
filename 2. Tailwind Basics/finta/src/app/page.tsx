import Image from 'next/image';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <div className="[background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#F7FBFF_69.58%,#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-[-9.5] h-full w-px bg-linear-to-b from-neutral-400/50 via-neutral-200 to-transparent pointer-events-none z-0 " />
        <div className=" absolute inset-y-0 right-[-9.5] h-full w-px bg-linear-to-b from-neutral-400/50 via-neutral-200 to-transparent pointer-events-none z-0 " />
      </div>

      <Container className="bg-amber-000 ">
        <Navbar />
        <Hero />
      </Container>

      <div className="bg-amber-00 flex justify-center relative w-full">
        <div className="h-px w-full absolute inset-x-0
        bg-linear-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"
        />
        <div className="max-w-7xl mx-auto p-4 ">
          <Image
            className="rounded-2xl max-w-full shadow-neutral-400 border border-neutral-200 shadow-xs object-cover object-top-left mask-b-from-0% to-100% "
            width={1000}
            height={1000}
            src="/hero.webp"
            alt="lund"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
