import Image from "next/image";

export const CobaltAxis = () => {
	interface Image {
		src: string;
		alt: string;
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
				alt: `Screenshot of Cobalt Axis’ Preset Shifts Menu`,
			},
		},
		{
			title: 'Analytics Dashboards',
			desc: 'Real-time insights into your operations and performance.',
			img: {
				src: '/images/cobalt-data-view.png',
				alt: `Screenshot of Cobalt Axis’ Data Center with a bar graph showing total employee hours`,
			},
		},
		{
			title: 'Facilties Schedules',
			desc: 'Live schedules for facilities ranging from pools and studios to gyms and activity spaces.',
			img: {
				src: '/images/cobalt-facilities-schedule-view.png',
				alt: `Screenshot of Cobalt Axis’ Facility Schedule module, showing a Pool Schedule with classes`,
			},
		},
		{
			title: 'Compliance Automation',
			desc: 'Ensure tasks and safety checks are always completed. Unlock productivity through gamification.',
			img: {
				src: '/images/cobalt-compliance-view.png',
				alt: `Screenshot of Cobalt Axis’ Snapshot module complete with Employee Zoning and Compliance Tracking/Gamification`,
			},
		},
		{
			title: 'Functional Design',
			desc: 'Access all the most important information in one streamlined page, designed for quick insights and efficient decision-making.',
			img: {
				src: '/images/cobalt-club-info-view.png',
				alt: `Screenshot of Cobalt Axis’ Club Info module, showing Memos, Compliance Charts and daily Facility Schedules`,
			},
		},
		{
			title: 'Mobile Layouts',
			desc: 'Seamlessly manage your business on the go with layouts optimized for mobile devices. Our mobile experience ensures staff and managers stay connected anytime, anywhere.',
			img: {
				src: '/images/cobalt-mobile-layouts.png',
				alt: `Screenshot of Cobalt Axis’ mobile layout, showing the Schedule page and tabs along the bottom`,
			},
		},
	];

	return (
		<section id='cobalt-axis' className='min-h-screen bg-white py-10 px-6'>
			<div className='text-center mb-16'>
				<h2 className='text-5xl text-cobalt font-bold'>Cobalt Axis</h2>
				<p className='text-grey mt-2'>
					A modular platform tailored to <b>your</b> business.
				</p>
			</div>
			<div className='grid md:grid-cols-3 gap-10 max-w-3/5 mx-auto'>
				{featureArray.map(({ title, desc, img }) => (
					<article
						key={title}
						className='flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition'
					>
						<div className='mb-5'>
							<h3 className='text-xl font-semibold mb-2'>{title}</h3>
							<p className='text-grey'>{desc}</p>
						</div>

						{img && (
							<div className='flex items-center justify-center flex-1'>
								<figure className='rounded-lg overflow-hidden shadow-sm'>
									<Image
										src={img.src}
										alt={img.alt}
										draggable={false}
										className='max-h-100'
									/>
								</figure>
							</div>
						)}
					</article>
				))}
			</div>
		</section>
	);
};
