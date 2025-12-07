import Image from 'next/image';

const Navbar = () => {
  const links = [
    {
      title: 'Founders',
      href: '#',
    },
    {
      title: 'Guide',
      href: '#',
    },
    {
      title: 'Pricing',
      href: '#',
    },
    {
      title: 'Log In',
      href: '#',
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">
        <Image 
          alt="Finta Logo" 
          width={68} 
          height={24} 
          src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg" />
      </div>
      <div className="nav-right">
        {links.map((link, index) => (
          <a className='links-items' href={link.href} key={index}>
            {link.title}
          </a>
        ))}
        <button className='btn'>Get started</button>
      </div>
    </div>
  );
}

export default Navbar
