'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import DemoButton from '../ui/DemoButton';
import ScrollPaddingSetter from './ScrollPaddingSetter';

const NAV_ITEMS = [
  { href: '#cobalt-axis', label: 'Products' },
  { href: '#consulting', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500 ease-in-out lg:h-20 h-14',
        isScrolled
          ? 'bg-abyss/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-light/95 backdrop-blur-sm border-b-0 py-4',
      )}
    >
      <div
        id="header-div"
        className="px-4 flex items-center justify-between w-full max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <Link href="#hero" className="flex items-center group">
          <figure className="relative h-8 md:h-11 lg:h-15 w-8 md:w-11 lg:w-15">
            <Image
              src="/images/cobalt-logo.svg"
              alt="Cobalt Software Solutions Logo"
              fill
              className="cursor-pointer object-contain group-hover:scale-110 transition-transform"
              draggable={false}
              priority
            />
          </figure>
          <div className="flex flex-col">
            <span
              className={cn(
                'font-bold hidden lg:block text-lg md:text-3xl/6 transition-all duration-500 ease-in-out text-shadow-lg',
                isScrolled ? 'text-light' : 'text-cobalt',
              )}
            >
              Cobalt
            </span>
            <span
              className={cn(
                'font-bold hidden lg:block text-lg md:text-sm transition-all duration-500 ease-in-out text-shadow-lg',
                isScrolled ? 'text-light' : 'text-cobalt',
              )}
            >
              Software Solutions
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden xl:flex space-x-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-medium text-lg transition-colors duration-500 py-1.5 px-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/50',
                isScrolled
                  ? 'text-white/90 hover:text-cobalt-light'
                  : 'text-abyss/80 hover:text-cobalt-light',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="xl:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="img"
            aria-label={isMenuOpen ? 'Menu close icon' : 'Menu open icon'}
          >
            <title>{isMenuOpen ? 'Close menu' : 'Open menu'}</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop call-to-action */}
        <div className="hidden xl:block">
          <DemoButton
            className={`px-5 transition-all duration-500 ${
              isScrolled
                ? 'bg-cobalt text-light hover:bg-cobalt-light hover:text-abyss shadow-sm shadow-cobalt/20'
                : 'bg-green text-light hover:bg-cobalt hover:text-light shadow-sm'
            }`}
          />
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={cn(
          'xl:hidden bg-abyss/98 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col space-y-2 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/50"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <DemoButton className="w-full bg-cobalt text-light hover:bg-cobalt-light" />
          </div>
        </nav>
      </div>

      <ScrollPaddingSetter />
    </header>
  );
}
