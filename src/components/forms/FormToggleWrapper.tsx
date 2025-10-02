'use client';
import { handleContactSubmit } from '@/lib/handleContactSubmit';
import ContactForm from './ContactForm';
import DemoForm from './DemoForm';
import FormToggle from './FormToggle';

const FormToggleWrapper = () => {
	return (
		<FormToggle
			render={(isRequestDemo) => (
				<>
					<div className={isRequestDemo ? 'hidden' : 'block max-w-lg mx-auto'}>
						<ContactForm onSubmit={handleContactSubmit} />
					</div>
					<div className={isRequestDemo ? 'block max-w-lg mx-auto' : 'hidden'}>
						<DemoForm onSubmit={handleContactSubmit} />
					</div>
				</>
			)}
		/>
	);
};

export default FormToggleWrapper;
