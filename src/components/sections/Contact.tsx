const Contact = () => {
	return (
		<section id="contact" className='bg-white py-20 px-6'>
			<div className='max-w-xl mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-4'>Let’s Talk</h2>
				<p className='text-grey mb-6'>
					We’d love to hear about your business and show you what Cobalt can do.
				</p>
				<form className='space-y-4'>
					<input
						type='text'
						placeholder='Your Name'
						className='w-full border border-gray-300 p-3 rounded-xl'
					/>
					<input
						type='email'
						placeholder='Email Address'
						className='w-full border border-gray-300 p-3 rounded-xl'
					/>
					<textarea
						placeholder='How can we help?'
						rows={4}
						className='w-full border border-gray-300 p-3 rounded-xl'
					/>
					<button className='bg-sky-700 text-white py-3 px-6 rounded-xl hover:bg-sky-800 transition'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
