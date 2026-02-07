"use client"
import { IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="relative flex rounded-lg md:rounded-full justify-between items-center mt-4 max-w-4xl mx-auto bg-white px-2 py-2 shadow-new">
        <div className="bg-amber-00 ml-0.5">
          <Image
            src="https://ui.aceternity.com/logo-dark.png"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-neutral-600 bg-amber-00 mr-3 ">
          {links.map((link, index) => (
            <Link
              className="hover:text-neutral-400"
              href={link.href}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden mr-3">
          {open ? <IconX /> : <IconMenu2 />}
        </button>
      </div>
      {open && (
        <div className="md:hidden absolut max-w-[95%] mx-auto inset-x-0 top-15.5 bg-white rounded-md shadow-new p-2">
          <div className="flex flex-col bg-amber-00 items-center gap-2 text-sm font-medium text-neutral-600 bg-amber-00">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-black bg-amber-00"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

