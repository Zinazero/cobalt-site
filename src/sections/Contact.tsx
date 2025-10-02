import FormToggleWrapper from '@/components/forms/FormToggleWrapper';

export const Contact = () => {
	return (
		<section id='contact' className='py-8 px-6'>
			<div className='max-w-2xl mx-auto text-center'>
				<h2 className='text-3xl text-cobalt font-bold mb-4'>Let’s Talk</h2>
				<p className='text-grey mb-6'>
					We’d love to hear about your business and show you what Cobalt can do.
				</p>

				<FormToggleWrapper />
			</div>
		</section>
	);
};
