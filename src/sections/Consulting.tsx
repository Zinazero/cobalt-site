import DemoButton from '@/components/ui/DemoButton';
import Image from 'next/image';

export const Consulting = () => {
	return (
		<section id='consulting' className='min-h-screen overflow-hidden text-dark'>
			<div className='flex flex-col items-center py-30 min-h-screen w-2/3 mx-auto space-y-20'>
				{/* Header */}
				<div className='flex flex-col items-center space-y-4 text-center'>
					<h2 className='text-4xl text-cobalt font-bold'>
						Software should adapt to your business — not the other way around.
					</h2>
					<h3 className='text-2xl font-source text-grey'>
						Get solutions built around your unique workflows, goals and
						challenges.
					</h3>
				</div>

				{/* Card */}
				<div className='flex flex-col 2xl:flex-row-reverse items-center bg-white max-w-120 2xl:max-w-300 shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden'>
					{/* Image */}
					<div className='w-full 2xl:w-1/2 h-80 2xl:h-150 relative'>
						<div className='absolute bottom-0 h-1/4 w-full 2xl:w-1/4 2xl:h-full bg-gradient-to-t 2xl:bg-gradient-to-r from-white to-white/0 z-1'></div>
						<Image
							src='/images/cobalt-consulting-pic.jpg'
							alt='App preview'
							fill
							className='object-cover object-top'
							draggable={false}
						/>
					</div>

					{/* Text */}
					<div className='2xl:w-1/2 flex flex-col space-y-4 p-2 2xl:p-10'>
						<h4 className='lg:text-2xl text-cobalt font-semibold text-center 2xl:text-left'>
							Not seeing what you’re looking for? <br /> Let us help you find
							it.
						</h4>

						<p className='lg:!text-xl'>
							In addition to our Axis platform, we offer custom solutions built
							from the ground up for you and your business. From simple static
							websites to fully-integrated operational platforms—if you need it
							we build it.
						</p>

						<p className='lg:!text-xl'>
							Schedule a one-on-one session with me to explore how custom
							software can optimize your workflows, boost productivity and solve
							your unique business challenges.
						</p>

						<p className='lg:!text-xl'>
							This white-glove consultation is <b>free</b> and completely
							personalized to your business needs.
						</p>
					</div>
				</div>

				<DemoButton
					text='Book a Consultation'
					className='bg-cobalt hover:bg-cobalt-hover text-2xl py-6 shadow-sm'
				/>
			</div>
		</section>
	);
};
