import { Button } from '@/components/ui/button';
import type { RequestDemoProps } from '@/types';

const Header = ({ setIsRequestDemo }: RequestDemoProps) => {
	const onLogoClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		window.history.pushState(null, '', '/');
	};

	const goToContact = (value: boolean) => {
		setIsRequestDemo(value);
		setTimeout(() => {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth',
			});
		}, 0);
		window.history.pushState(null, '', '/#contact');
	};

	return (
		<header className='sticky top-0 z-50 w-full border-b shadow-sm bg-gradient-to-r from-abyss to-cobalt'>
			<div className='mx-auto px-4 py-4 flex items-center justify-between'>
				<div className='flex items-center'>
					<img
						src='/cobalt-logo.svg'
						alt='Logo'
						className='w-15 h-15 cursor-pointer'
						onClick={() => onLogoClick()}
						draggable={false}
					/>
					<span className='text-light font-extrabold absolute left-20'>
						Cobalt Software Solutions
					</span>
				</div>

				<nav className='hidden md:flex space-x-20 text-2xl font-medium text-white'>
					<a href='#features' className='hover:text-cobalt-hover transition'>
						Features
					</a>
					<a
						href='#testimonials'
						className='hover:text-cobalt-hover transition'
					>
						Testimonials
					</a>
					<a
						href='#contact'
						onClick={() => goToContact(false)}
						className='hover:text-cobalt-hover transition'
					>
						Contact
					</a>
				</nav>

				<div className='hidden md:block'>
					<Button
						onClick={() => goToContact(true)}
						className='bg-abyss text-white hover:bg-cobalt-hover cursor-pointer'
					>
						Request a Demo
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
