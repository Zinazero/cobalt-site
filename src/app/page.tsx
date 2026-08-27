import { Axis } from '@/sections/Axis';
import { Extension } from '@/sections/Extension';
import { Contact } from '@/sections/Contact';
import { Hero } from '@/sections/Hero';
import { Testimonials } from '@/sections/Testimonials';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <Axis />
      <Extension />
      <Testimonials />
      <Contact />
    </main>
  );
}
