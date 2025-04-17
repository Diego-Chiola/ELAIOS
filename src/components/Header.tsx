'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '../components/ui/button';
import { getPath } from '../lib/utils';

const navLinks = [
  { displayedName: 'Home', href: getPath('') },
  { displayedName: 'The Project', href: getPath('about') },
];

console.log(navLinks);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-30 left-0 right-0 top-0 bg-primary text-primary-foreground fixed md:static">
      <div className="flex justify-between items-center py-4 md:py-6 px-4 mx-auto w-full md:max-w-9/10">
        <div className="w-[350px] mr-20">
          <img className="z-10 w-[175px]" src="./logo.svg" alt="ELAIOS logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block text-base font-medium">
          <ul className="flex">
            {navLinks.map(link => (
              <li key={link.href}>
                <Button className="text-base" variant={'link'}>
                  <Link to={link.href}>{link.displayedName}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          className="hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:pointer-events-none md:hidden z-20"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-base font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <Button className="text-base" variant={'link'}>
                <Link to={link.href} onClick={() => setIsOpen(false)}>
                  {link.displayedName}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
