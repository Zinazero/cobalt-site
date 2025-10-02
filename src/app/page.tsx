import { Hero } from '@/sections/Hero';
import { CobaltAxis } from '@/sections/CobaltAxis';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Consulting } from '@/sections/Consulting';

export default function HomePage() {
	return (
		<main className='min-h-screen bg-light'>
			<Hero />
			<CobaltAxis />
			<Consulting />
			<Testimonials />
			<Contact />
		</main>
	);
}
