import DemoButton from '@/components/ui/DemoButton';
import Image from 'next/image';

export const Consulting = () => {
	return (
		<section id='consulting' className='min-h-screen overflow-hidden text-dark'>
			<div className='flex flex-col items-center py-30 min-h-screen w-2/3 mx-auto space-y-20'>
				{/* Header */}
				<div className='flex flex-col items-center space-y-4'>
					<h2 className='text-4xl text-cobalt font-bold'>
						Software should adapt to your business — not the other way around.
					</h2>
					<h3 className='text-2xl font-source text-grey'>
						Get solutions built around your unique workflows, goals and
						challenges.
					</h3>
				</div>

				{/* Card */}
				<div className='flex items-center bg-white space-x-10 w-2/3 pl-10 shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden'>
					{/* Text */}
					<div className='w-1/2 flex flex-col space-y-4'>
						<h4 className='text-2xl text-cobalt font-semibold'>
							Not seeing what you’re looking for? <br /> Let us help you find
							it.
						</h4>

						<p className='!text-xl'>
							In addition to our Axis platform, we offer custom solutions built
							from the ground up for you and your business. From simple static
							websites to fully-integrated operational platforms—if you need it
							we build it.
						</p>

						<p className='!text-xl'>
							Schedule a one-on-one session with me to explore how custom
							software can optimize your workflows, boost productivity and solve
							your unique business challenges.
						</p>

						<p className='!text-xl'>
							This white-glove consultation is <b>free</b> and completely
							personalized to your business needs.
						</p>
					</div>

					{/* Image */}
					<div className='w-1/2 relative'>
						<div className='absolute w-1/4 h-full bg-gradient-to-r from-white to-white/0'></div>
						<Image
							src='/images/cobalt-consulting-pic.jpg'
							alt='App preview'
							draggable={false}
						/>
					</div>
				</div>

				<DemoButton text='Book a Consultation' className='bg-cobalt hover:bg-cobalt-hover text-2xl py-6 shadow-sm' />
			</div>
		</section>
	);
};
