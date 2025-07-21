import Hero from './components/sections/Hero';
import Header from './components/layout/Header';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { useState } from 'react';

const App = () => {
	const [isRequestDemo, setIsRequestDemo] = useState(false);

	return (
		<>
			<Header setIsRequestDemo={setIsRequestDemo} />
			<main>
				<Hero setIsRequestDemo={setIsRequestDemo} />
				<Features />
				<Testimonials />
				<Contact
					isRequestDemo={isRequestDemo}
					setIsRequestDemo={setIsRequestDemo}
				/>
			</main>
			<Footer />
		</>
	);
};

export default App;
