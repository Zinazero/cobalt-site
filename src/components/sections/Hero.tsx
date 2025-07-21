import { Button } from '@/components/ui/button';
import type { RequestDemoProps } from '@/types';

const Hero = ({ setIsRequestDemo }: RequestDemoProps) => {

	const goToDemoForm = () => {
		setIsRequestDemo(true);
		setTimeout(() => {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth',
			});
		}, 0);
		window.history.pushState(null, '', '/#contact');
	};

	return (
		<section className='relative bg-light min-h-screen flex items-center overflow-hidden'>
			{/* Image */}
			<div className='hidden lg:block absolute right-25 w-3/5 rounded-lg overflow-hidden shadow-sm'>
				<img
					src='/cobalt-primary-view.png'
					alt='App preview'
					className='h-full w-full object-contain opacity-30'
					draggable={false}
				/>
			</div>

			{/* Content */}
			<div className='container mx-auto px-6 lg:px-20 text-center lg:text-left relative z-10'>
				<div className='max-w-xl mx-auto lg:mx-0 bg-white rounded-lg overflow-hidden shadow-lg p-4'>
					<h1 className='text-4xl font-extrabold text-dark mb-6'>
						Empower Your Business with <br />
						<span className='text-cobalt'>Tailored Software</span>
					</h1>
					<p className='text-grey mb-8'>
						Custom productivity and data insights platforms designed to
						streamline your operations and unlock growth.
					</p>
					<div className='flex justify-center lg:justify-start gap-4'>
						<Button asChild>
							<a
								href='#contact'
								onClick={() => goToDemoForm()}
								className={` bg-cobalt text-white px-6 py-3 rounded-md shadow hover:bg-cobalt-hover transition`}
							>
								Request a Demo
							</a>
						</Button>
						<Button asChild>
							<a
								href='#features'
								className={` text-cobalt border border-cobalt px-6 py-3 rounded-md hover:bg-cobalt-hover hover:border-cobalt-hover hover:text-white transition`}
							>
								Learn More
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
