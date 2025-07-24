import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import type { FormSubmitProps, InputType } from '@/types';

const DemoForm = ({ handleContactSubmit }: FormSubmitProps) => {
	const inputArray: InputType[] = [
		{
			tag: 'input',
			type: 'text',
			name: 'First Name',
			placeholder: 'First Name*',
			required: true,
		},
		{
			tag: 'input',
			type: 'text',
			name: 'Last Name',
			placeholder: 'Last Name*',
			required: true,
		},
		{
			tag: 'input',
			type: 'email',
			name: 'Email',
			placeholder: 'Email Address*',
			required: true,
		},
		{
			tag: 'input',
			type: 'tel',
			name: 'Phone',
			placeholder: 'Phone Number',
			required: false,
		},
		{
			tag: 'input',
			type: 'text',
			name: 'Company Name',
			placeholder: 'Company Name*',
			required: true,
		},
		{
			tag: 'input',
			type: 'text',
			name: 'Industry',
			placeholder: 'Industry',
			required: false,
		},
		{
			tag: 'textarea',
			name: 'Message',
			placeholder: 'Additional notes or questions',
			rows: 4,
			required: false,
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

export default DemoForm;
