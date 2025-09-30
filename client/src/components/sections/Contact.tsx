import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import ContactForm from '../forms/ContactForm';
import DemoForm from '../forms/DemoForm';
import type { FormSubmitHandler, RequestDemoProps } from '../../types';
import axios from 'axios';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = ({ isRequestDemo, setIsRequestDemo }: RequestDemoProps) => {
	const [isContactSent, setIsContactSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const switchTab = (value: string) => {
		setIsRequestDemo(value === 'demo');
		setTimeout(() => {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth',
			});
		}, 0);
	};

	const handleContactSubmit: FormSubmitHandler = async (e, type) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		formData.append('type', type);

		const formObj = Object.fromEntries(formData.entries()) as Record<
			string,
			string
		>;

		const website = formObj.website;
		const formType = formObj.type;
		const email = formObj.Email;

		const fields = Object.entries(formObj)
			.filter(([key]) => key !== 'website' && key !== 'type')
			.map(([label, info]) => ({ label, info }));

		const subject = formType === 'contact' ? 'Contact Request' : 'Demo Request';

		const data = { subject, email, fields, website };

		try {
			await axios.post('/api/contact', data);
			setIsContactSent(true);
			setErrorMessage('');
		} catch (error: any) {
			setErrorMessage('Something went wrong. Please try again.');
			//console.error(error.response?.data || error.message);
		}
	};

	return (
		<section id='contact' className='bg-white py-30 px-6'>
			<div className='max-w-xl mx-auto text-center'>
				<AnimatePresence mode='wait'>
					{isContactSent ? (
						<motion.div
							key='contact-sent-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<p className='text-2xl text-grey mb-6'>
								Thank you for reaching out. We'll be in touch.
							</p>
							<Button
								type='button'
								className='w-1/2 active:scale-95 bg-cobalt text-white py-3 px-6 rounded-xl hover:bg-cobalt-hover transition'
								onClick={() => setIsContactSent(false)}
							>
								Return
							</Button>
						</motion.div>
					) : (
						<motion.div
							key='contact-form-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Tabs
								value={isRequestDemo ? 'demo' : 'contact'}
								onValueChange={(value) => switchTab(value)}
							>
								<TabsList className='mx-auto my-4 bg-light'>
									<TabsTrigger
										value='contact'
										className='cursor-pointer data-[state=active]:bg-white data-[state=active]:text-cobalt-hover'
									>
										Contact
									</TabsTrigger>
									<TabsTrigger
										value='demo'
										className='cursor-pointer data-[state=active]:bg-white data-[state=active]:text-cobalt-hover'
									>
										Request Demo
									</TabsTrigger>
								</TabsList>
							</Tabs>

							<h2 className='text-3xl font-bold mb-4'>Let’s Talk</h2>
							<p className='text-grey mb-6'>
								We’d love to hear about your business and show you what Cobalt
								can do.
							</p>
							{isRequestDemo ? (
								<DemoForm
									handleContactSubmit={(e) =>
										handleContactSubmit(e, 'request-demo')
									}
								/>
							) : (
								<ContactForm
									handleContactSubmit={(e) => handleContactSubmit(e, 'contact')}
								/>
							)}
						</motion.div>
					)}
				</AnimatePresence>
				{errorMessage && (
					<p className='mt-5 text-[red]'>{errorMessage}</p>
				)}
			</div>
		</section>
	);
};

export default Contact;
