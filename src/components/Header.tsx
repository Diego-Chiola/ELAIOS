'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { displayedName: 'Home', href: '#home' },
  { displayedName: 'Who We Are', href: '#who-we-are' },
  { displayedName: 'The Project', href: '#the-project' },
  { displayedName: 'Furthers Features', href: '#furthers-features' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="flex justify-between items-center py-4 px-4 mx-auto w-full md:py-6 md:max-w-9/10">
        <img className="z-10 w-[175px]" src="./logo.svg" alt="ELAIOS logo" />

        {/* Desktop Nav */}
        <nav className="hidden text-base font-medium md:block">
          <ul className="flex gap-6">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link to={link.href}>{link.displayedName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          className="z-20 md:hidden"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 pb-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 items-center text-base font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link to={link.href} onClick={() => setIsOpen(false)}>
                {link.displayedName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
