export interface Field {
	label: string;
	info: string;
}

export type FormSubmitHandler = (
	e: React.FormEvent<HTMLFormElement>,
	type: 'contact' | 'demo'
) => Promise<void | boolean>;
