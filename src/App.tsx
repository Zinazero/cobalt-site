import Hero from './components/sections/Hero';
import Header from './components/layout/Header';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Features />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default App;
