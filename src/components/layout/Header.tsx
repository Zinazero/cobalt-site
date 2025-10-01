import DemoButton from '../ui/DemoButton';

export default function Header() {
	return (
		<header className='sticky top-0 z-50 w-full border-b shadow-sm bg-gradient-to-r from-abyss to-cobalt'>
			<div id='header-div' className='mx-auto px-4 flex items-center justify-between'>
				{/* Logo */}
				<div className='flex items-center'>
					<a href='#hero'>
						<img
							src='/images/cobalt-logo.svg'
							alt='Logo'
							className='w-15 h-15 cursor-pointer'
							draggable={false}
						/>
					</a>
					<span className='text-light font-extrabold absolute left-20'>
						Cobalt Software Solutions
					</span>
				</div>

				{/* Navigation */}
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
					<a href='#contact' className='hover:text-cobalt-hover transition'>
						Contact
					</a>
				</nav>

				{/* Interactive part */}
				<div className='hidden md:block'>
					<DemoButton className='bg-abyss text-white hover:bg-cobalt-hover' />
				</div>
			</div>
		</header>
	);
}
