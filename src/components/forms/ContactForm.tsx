import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import type { InputType } from '@/types';

const ContactForm = () => {
	const inputArray: InputType[] = [
		{
			tag: 'input',
			type: 'text',
			placeholder: 'Your Name',
			required: true,
		},
		{
			tag: 'input',
			type: 'email',
			placeholder: 'Email Address',
			required: true,
		},
		{
			tag: 'textarea',
			placeholder: 'How can we help?',
			rows: 4,
			required: true,
		},
	];

	return (
		<form className='space-y-4'>
			{inputArray.map(({ tag, type, placeholder, className, rows }, i) =>
				tag === 'input' ? (
					<Input
						key={i}
						type={type}
						placeholder={placeholder}
						className={className}
					/>
				) : (
					<Textarea
						key={i}
						placeholder={placeholder}
						rows={rows}
						className={className}
					/>
				)
			)}
			<Button className='w-full active:scale-95 bg-cobalt text-white py-3 px-6 rounded-xl hover:bg-cobalt-hover transition'>
				Send Message
			</Button>
		</form>
	);
};

export default ContactForm;
