export type InputType = {
	tag: 'input' | 'textarea';
	type?: 'text' | 'email' | 'tel' | 'number';
	name: string;
	placeholder: string;
	className?: string;
	rows?: number;
	required: boolean;
};

export interface RequestDemoProps {
	isRequestDemo?: boolean;
	setIsRequestDemo: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FormSubmitHandler = (
	e: React.FormEvent<HTMLFormElement>,
	type: string
) => void | Promise<void>;

export interface FormSubmitProps {
	handleContactSubmit: (
		e: React.FormEvent<HTMLFormElement>
	) => void | Promise<void>;
}
