import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import ContactForm from '../forms/ContactForm';
import DemoForm from '../forms/DemoForm';
import type { FormSubmitHandler, RequestDemoProps } from '../../types';
import axios from 'axios';

const Contact = ({ isRequestDemo, setIsRequestDemo }: RequestDemoProps) => {
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
		const endpoint = `/api/${type}`;

		const data = Object.fromEntries(formData.entries()) as Record<string, string>;
		console.log(endpoint, data);
		try {
			await axios.post(endpoint, data);
			form.reset();
		} catch (error: any) {
			console.error(error.response?.data || error.message);
		}
	};

	return (
		<section id='contact' className='bg-white py-30 px-6'>
			<div className='max-w-xl mx-auto text-center'>
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
					We’d love to hear about your business and show you what Cobalt can do.
				</p>

				{isRequestDemo ? (
					<DemoForm handleContactSubmit={(e) => handleContactSubmit(e, 'request-demo')} />
				) : (
					<ContactForm handleContactSubmit={(e) => handleContactSubmit(e, 'contact')} />
				)}
			</div>
		</section>
	);
};

export default Contact;
