import Image from 'next/image';

export const CobaltAxis = () => {
	interface Image {
		src: string;
		alt: string;
		position: string;
	}

	interface Feature {
		title: string;
		desc: string;
		img?: Image;
	}

	const featureArray: Feature[] = [
		{
			title: 'Scheduling Tools',
			desc: 'Manage staff, shifts and budgets with ease. Utilize preset shifts and weeks to save your company time and money.',
			img: {
				src: '/images/cobalt-presets-view.png',
				alt: 'Screenshot of Cobalt Axis’ Preset Shifts Menu',
				position: 'object-left',
			},
		},
		{
			title: 'Analytics Dashboards',
			desc: 'Real-time insights into your operations and performance.',
			img: {
				src: '/images/cobalt-data-view.png',
				alt: 'Screenshot of Cobalt Axis’ Data Center with a bar graph showing total employee hours',
				position: 'object-bottom',
			},
		},
		{
			title: 'Facilties Schedules',
			desc: 'Live schedules for facilities ranging from pools and studios to gyms and activity spaces.',
			img: {
				src: '/images/cobalt-facilities-schedule-view.png',
				alt: 'Screenshot of Cobalt Axis’ Facility Schedule module, showing a Pool Schedule with classes',
				position: 'object-top',
			},
		},
		{
			title: 'Compliance Automation',
			desc: 'Ensure tasks and safety checks are always completed. Unlock productivity through gamification.',
			img: {
				src: '/images/cobalt-compliance-view.png',
				alt: 'Screenshot of Cobalt Axis’ Snapshot module complete with Employee Zoning and Compliance Tracking/Gamification',
				position: 'object-top-right',
			},
		},
		{
			title: 'Functional Design',
			desc: 'Access all the most important information in one streamlined page, designed for quick insights and efficient decision-making.',
			img: {
				src: '/images/cobalt-club-info-view.png',
				alt: 'Screenshot of Cobalt Axis’ Club Info module, showing Memos, Compliance Charts and daily Facility Schedules',
				position: 'object-top',
			},
		},
		{
			title: 'Mobile Layouts',
			desc: 'Seamlessly manage your business on the go with layouts optimized for mobile devices, ensuring staff and managers stay connected anytime, anywhere.',
			img: {
				src: '/images/cobalt-mobile-layouts.png',
				alt: 'Screenshot of Cobalt Axis’ mobile layout, showing the Schedule page and tabs along the bottom',
				position: 'object-top',
			},
		},
	];

	return (
		<section id='cobalt-axis' className='min-h-screen bg-white py-10 px-6'>
			<div className='max-w-450 mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-5xl text-cobalt font-bold'>Cobalt Axis</h2>
					<p className='text-grey mt-2'>
						A modular platform tailored to <b>your</b> business.
					</p>
				</div>
				<div className='grid lg:grid-cols-3 gap-10 mx-auto'>
					{featureArray.map(({ title, desc, img }) => (
						<article
							key={title}
							className='flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition min-h-130'
						>
							<div className='mb-10'>
								<h3 className='text-xl font-semibold mb-2'>{title}</h3>
								<p className='text-grey'>{desc}</p>
							</div>

							{img && (
								<figure className='w-full h-140 lg:h-80 rounded-lg overflow-hidden shadow-sm relative'>
									<Image
										src={img.src}
										alt={img.alt}
										draggable={false}
										fill
										className={`object-cover ${img.position}`}
									/>
								</figure>
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
