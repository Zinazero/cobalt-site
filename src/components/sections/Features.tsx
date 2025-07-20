const Features = () => {
	type Feature = {
		title: string;
		desc: string;
		imgSrc?: string;
	};

	const featureArray: Feature[] = [
		{
			title: 'Scheduling Tools',
			desc: 'Manage staff, shifts and budgets with ease.',
			imgSrc: '/cobalt-presets-view.png',
		},
		{
			title: 'Data Dashboard',
			desc: 'Real-time insights into your operations and performance.',
			imgSrc: '/cobalt-data-view.png',
		},
		{
			title: 'Compliance Automation',
			desc: 'Ensure tasks and safety checks are always completed.',
		},
	];

	return (
		<section id='features' className='py-20 bg-white text-dark px-6'>
			<div className='text-center mb-16'>
				<h2 className='text-3xl text-cobalt font-bold'>What We Offer</h2>
				<p className='text-grey mt-2'>
					Tools that simplify operations and help you grow
				</p>
			</div>
			<div className='grid md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
				{featureArray.map(({ title, desc, imgSrc }) => (
					<div
						key={title}
						className='bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition'
					>
						<h3 className='text-xl font-semibold mb-2'>{title}</h3>
						<p className='text-grey'>{desc}</p>
                        <img src={imgSrc} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
