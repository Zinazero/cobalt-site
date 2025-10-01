import FormToggleWrapper from '@/components/forms/FormToggleWrapper';

export default function Contact() {
	return (
		<section id='contact' className='bg-white py-[30px] px-6'>
			<div className='max-w-xl mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-4'>Let’s Talk</h2>
				<p className='text-grey mb-6'>
					We’d love to hear about your business and show you what Cobalt can do.
				</p>

				<FormToggleWrapper />
			</div>
		</section>
	);
}
