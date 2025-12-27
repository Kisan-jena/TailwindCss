import Image from 'next/image';

const Navbar = () => {
  const links = [
    {
      title: 'Founders',
      href: 'frontend',
    },
    {
      title: 'Guide',
      href: '/guide',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Log In',
      href: '/login',
    },
  ];

  return (
    <div className="flex items-center justify-between bg-amber-00 py-0.5 px-1">
      <Image
        alt="Finta Logo"
        width={68}
        height={24}
        src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg"
      />
      <div className="flex items-center gap-6 bg-amber-00">
        {links.map((link, index) => (
          <a
            className="text-neutral-700 text-sm font-medium hover:text-neutral-500 transition duration-200"
            href={link.href}
            key={index}
          >
            {link.title}
          </a>
        ))}
        <button className="bg-[#2678f2] hover:cursor-pointer hover:bg-blue-600  px-3.5 py-1.5 rounded-lg text-white font-medium shadow-lg text-shadow-sm">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
