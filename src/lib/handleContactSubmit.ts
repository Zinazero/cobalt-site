import axios from 'axios';
import { Field, FormSubmitHandler } from '@/types';


export const handleContactSubmit: FormSubmitHandler = async (e, type) => {
	e.preventDefault();

	const form = e.currentTarget;
	const formData = new FormData(form);

	// Append type to the form data
	formData.append('type', type);

	const formObj = Object.fromEntries(formData.entries()) as Record<
		string,
		string
	>;

	const email = formObj.Email;
	const formType = formObj.type;

	const fields: Field[] = Object.entries(formObj)
		.filter(([key]) => key !== 'website' && key !== 'type')
		.map(([label, info]) => ({ label, info }));

	const subject = formType === 'contact' ? 'Contact Request' : 'Demo Request';

	try {
		await axios.post('/api/contact', {
			subject,
			email,
			fields,
			website: formObj.website,
		});
	} catch (err) {
		console.error(err);
	}
};
