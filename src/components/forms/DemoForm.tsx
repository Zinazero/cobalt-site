import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import type { InputType } from '@/types';

const DemoForm = () => {
	const inputArray: InputType[] = [
		{
			tag: 'input',
			type: 'text',
			placeholder: 'First Name*',
			required: true,
		},
		{
			tag: 'input',
			type: 'text',
			placeholder: 'Last Name*',
			required: true,
		},
		{
			tag: 'input',
			type: 'email',
			placeholder: 'Email Address*',
			required: true,
		},
		{
			tag: 'input',
			type: 'tel',
			placeholder: 'Phone Number',
			required: false,
		},
		{
			tag: 'input',
			type: 'text',
			placeholder: 'Company Name*',
			required: true,
		},
		{
			tag: 'input',
			type: 'text',
			placeholder: 'Industry',
			required: false,
		},
		{
			tag: 'textarea',
			placeholder: 'Additional notes or questions',
			rows: 4,
			required: false,
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

export default DemoForm;
