'use client';
import ContactForm from './ContactForm';
import DemoForm from './DemoForm';
import FormToggle from './FormToggle';

const FormToggleWrapper = () => {
	return (
		<FormToggle
			render={(isRequestDemo) => (
				<>
					<div className={isRequestDemo ? 'hidden' : 'block'}>
						<ContactForm />
					</div>
					<div className={isRequestDemo ? 'block' : 'hidden'}>
						<DemoForm />
					</div>
				</>
			)}
		/>
	);
}

export default FormToggleWrapper;
