export type InputType = {
	tag: 'input' | 'textarea';
	type?: 'text' | 'email' | 'tel' | 'number';
	placeholder: string;
	className?: string;
	rows?: number;
	required: boolean;
};

export interface RequestDemoProps {
	isRequestDemo?: boolean;
	setIsRequestDemo: React.Dispatch<React.SetStateAction<boolean>>;
}
