import { buttonVariants } from '@/components/ui/button';

const Header = () => {
	return (
		<header className='w-full border-b  shadow-sm bg-gradient-to-r from-abyss to-cobalt'>
			<div className='mx-auto px-4 py-4 flex items-center justify-between'>
				<img src='/cobalt-logo.svg' alt='Logo' className="w-15 h-15" />

				<nav className='hidden md:flex space-x-30 text-2xl font-medium text-white'>
					<a href='#features' className='hover:text-cobalt transition'>
						Features
					</a>
					<a href='#testimonials' className='hover:text-cobalt transition'>
						Testimonials
					</a>
					<a href='#contact' className='hover:text-cobalt transition'>
						Contact
					</a>
				</nav>

				<div className='hidden md:block'>
					<a
						href='#demo'
						className={`${buttonVariants({
							variant: 'default',
						})} bg-abyss text-white hover:bg-cobalt-hover`}
					>
						Book a Demo
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
