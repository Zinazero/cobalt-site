const Features = () => {
	type Feature = {
		title: string;
		desc: string;
		imgSrc?: string;
	};

	const featureArray: Feature[] = [
		{
			title: 'Scheduling Tools',
			desc: 'Manage staff, shifts and budgets with ease. Utilize preset shifts and weeks to save your company time and money.',
			imgSrc: '/images/cobalt-presets-view.png',
		},
		{
			title: 'Analytics Dashboards',
			desc: 'Real-time insights into your operations and performance.',
			imgSrc: '/images/cobalt-data-view.png',
		},
		{
			title: 'Facilties Schedules',
			desc: 'Live schedules for facilities ranging from pools and studios to gyms and activity spaces.',
			imgSrc: '/images/cobalt-facilities-schedule-view.png',
		},
		{
			title: 'Compliance Automation',
			desc: 'Ensure tasks and safety checks are always completed. Unlock productivity through gamification.',
			imgSrc: '/images/cobalt-compliance-view.png',
		},
		{
			title: 'Functional Layouts',
			desc: 'Access all the most important information in one streamlined page, designed for quick insights and efficient decision-making.',
			imgSrc: '/images/cobalt-club-info-view.png'
		},
		{
			title: 'Tailored Solutions',
			desc: 'Software should adapt to your business—not the other way around. Get solutions built around your unique workflows, goals and challenges.',
			imgSrc: '/images/cobalt-consulting-pic.jpg'
		}
	];

	return (
		<section id='features' className='py-30 bg-white text-dark px-6'>
			<div className='text-center mb-16'>
				<h2 className='text-3xl text-cobalt font-bold'>What We Offer</h2>
				<p className='text-grey mt-2'>
					Tools that simplify operations and help you grow
				</p>
			</div>
			<div className='grid md:grid-cols-3 gap-10 max-w-3/4 mx-auto'>
				{featureArray.map(({ title, desc, imgSrc }) => (
					<div
						key={title}
						className='flex flex-col bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition'
					>
						<div className="mb-2">
							<h3 className='text-xl font-semibold mb-2'>{title}</h3>
							<p className='text-grey'>{desc}</p>
						</div>
						<div className='flex items-center flex-1'>
							<div className="rounded-lg overflow-hidden shadow-sm">
								<img src={imgSrc} draggable={false} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
