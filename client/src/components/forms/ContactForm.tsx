import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import type { FormSubmitProps, InputType } from '@/types';

const ContactForm = ({ handleContactSubmit }: FormSubmitProps) => {
	const inputArray: InputType[] = [
		{
			tag: 'input',
			type: 'text',
			name: 'Name',
			placeholder: 'Your Name',
			required: true,
		},
		{
			tag: 'input',
			type: 'email',
			name: 'Email',
			placeholder: 'Email Address',
			required: true,
		},
		{
			tag: 'textarea',
			name: 'Message',
			placeholder: 'How can we help?',
			rows: 4,
			required: true,
		},
	];

	return (
		<form className='space-y-4' onSubmit={handleContactSubmit}>
			{inputArray.map(({ tag, type, name, placeholder, className, rows, required }, i) =>
				tag === 'input' ? (
					<Input
						key={i}
						type={type}
						name={name}
						placeholder={placeholder}
						className={className}
						required={required}
					/>
				) : (
					<Textarea
						key={i}
						name={name}
						placeholder={placeholder}
						rows={rows}
						className={className}
						required={required}
					/>
				)
			)}
			<input
				type='text'
				name='website'
				autoComplete='off'
				tabIndex={-1}
				style={{ display: 'none' }}
			/>
			<Button
				type='submit'
				className='w-full active:scale-95 bg-cobalt text-white py-3 px-6 rounded-xl hover:bg-cobalt-hover transition'
			>
				Send Message
			</Button>
		</form>
	);
};

export default ContactForm;
