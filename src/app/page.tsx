import { CobaltAxis } from '@/sections/CobaltAxis';
import { Consulting } from '@/sections/Consulting';
import { Contact } from '@/sections/Contact';
import { Hero } from '@/sections/Hero';
import { Testimonials } from '@/sections/Testimonials';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <CobaltAxis />
      <Consulting />
      <Testimonials />
      <Contact />
    </main>
  );
}
