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
    <header className="fixed z-10 w-full shadow-xl md:static bg-primary text-primary-foreground h-[var(--header-height)]">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        <h1 className="text-3xl font-accent">
          <Link to="/ELAIOS">ELAIOS</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden text-sm md:block">
          <ul className="flex gap-8">
            {navLinks.map(link => (
              <li
                key={link.href}
                className="transition-transform hover:scale-105"
              >
                <Link to={link.href}>{link.displayedName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          className="z-20 cursor-pointer md:hidden"
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
        <ul className="flex flex-col gap-4 items-center">
          {navLinks.map(link => (
            <li
              key={link.href}
              className="transition-transform hover:scale-105"
            >
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
