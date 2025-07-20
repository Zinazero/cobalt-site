const Testimonials = () => {
	type Testimonial = {
		quote: string;
		name: string;
		title: string;
		location?: string;
	};

	const quoteArray: Testimonial[] = [
		{
			quote:
				'Cobalt CMS has been a true game-changer. I can now complete monthly schedules in under 30 minutes, staff instantly see updates on mobile and our supervisor team saves 1–2 hours every week thanks to automated snapshot generation. I can quickly assess and adjust staffing levels to stay within budget.',
			name: 'Ethan White',
			title: 'Experience Manager',
			location: 'MOVATI Athletic Guelph',
		},
		{
			quote:
				'Cobalt CMS has made scheduling and daily zoning a breeze. Staff are more attentive, shift swaps are easier to track and task sign-offs not only boost accountability but create a fun sense of competition. It has significantly increased productivity across the team.',
			name: 'Tyler Greenough',
			title: 'Member Experience Supervisor',
			location: 'MOVATI Athletic Guelph',
		},
		{
			quote:
				'Cobalt CMS is more than just software — it brings clarity, structure and accountability to our daily work. It motivates our team to take pride and ownership, improves communication through shift offering and helps us deliver the premium experience MOVATI Athletic is known for.',
			name: 'Jack Van Dam',
			title: 'Member Experience Associate',
			location: 'MOVATI Athletic Guelph',
		},
	];

	return (
		<section id='testimonials' className='bg-light py-20 px-6'>
			<div className='text-center mb-12'>
				<h2 className='text-3xl text-cobalt font-bold'>
					SME-Focused Solutions Backed by Real-World Experience
				</h2>
			</div>
			<div className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto'>
				{quoteArray.map(({ quote, name, title, location }, index) => {
					const isLastOdd =
						quoteArray.length % 2 === 1 && index === quoteArray.length - 1;
					return (
						<div
							key={name}
							className={`bg-white p-6 rounded-2xl shadow-sm ${
								isLastOdd
									? 'col-span-2 justify-self-center max-w-lg mx-auto'
									: 'max-w-lg'
							}`}
						>
							<p className='italic text-grey-dark mb-4'>"{quote}"</p>
							<p className='font-semibold text-dark'>{name}</p>
							<p className='text-sm text-muted-foreground'>
								{title}
								{location ? `, ${location}` : ''}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Testimonials;
