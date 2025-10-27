import Image from 'next/image';
import DemoButton from '../ui/DemoButton';
import ScrollPaddingSetter from './ScrollPaddingSetter';

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b shadow-sm bg-gradient-to-r from-abyss to-cobalt
                   h-14 lg:h-20"
    >
      <div id="header-div" className="px-4 flex items-center justify-between w-full h-full relative">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <figure className="relative h-8 md:h-11 lg:h-15 w-8 md:w-11 lg:w-15">
            <Image
              src="/images/cobalt-logo.svg"
              alt="Logo"
              fill
              className="cursor-pointer"
              draggable={false}
            />
          </figure>
          <span className="text-light font-extrabold hidden lg:block">Cobalt Software Solutions</span>
        </a>

        {/* Navigation */}
        <nav className="hidden absolute left-1/2 -translate-x-1/2 xl:flex space-x-20 text-xl xl:text-2xl font-medium text-white">
          <a href="#cobalt-axis" className="hover:text-cobalt-hover transition">
            Products
          </a>
          <a href="#consulting" className="hover:text-cobalt-hover transition">
            Services
          </a>
          <a href="#testimonials" className="hover:text-cobalt-hover transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-cobalt-hover transition">
            Contact
          </a>
        </nav>

        {/* Interactive part */}
        <div>
          <DemoButton className="bg-abyss text-white hover:bg-cobalt-hover text-xs md:text-lg xl:text-xl" />
        </div>
      </div>
      <ScrollPaddingSetter />
    </header>
  );
}
