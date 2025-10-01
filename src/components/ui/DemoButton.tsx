'use client';

import { Button } from './shadcn/button';

interface DemoButtonProps {
    className?: string
}

const DemoButton = ({ className }: DemoButtonProps) => {
	const handleDemoClick = () => {
		window.location.hash = 'demo';
		document.getElementById('contact')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<Button
			onClick={handleDemoClick}
			className={`${className} cursor-pointer`}
		>
			Request a Demo
		</Button>
	);
};

export default DemoButton;
