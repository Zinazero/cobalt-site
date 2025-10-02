import ContactTemplate from '../../src/emails/templates/ContactTemplate';

const ContactExample = () => {
	const fields = [
		{ label: 'First Name', info: 'John' },
		{ label: 'Last Name', info: 'Doe' },
		{ label: 'Email', info: 'johndoe@gmail.com' },
		{ label: 'Phone', info: '5198654160' },
		{ label: 'Company Name', info: 'John Doe Inc.' },
		{ label: 'Industry', info: 'Hospitality Services' },
	];

	return <ContactTemplate fields={fields} />;
};

export default ContactExample;
