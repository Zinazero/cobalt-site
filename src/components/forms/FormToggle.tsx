'use client';
import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/shadcn/tabs';
import { AnimatePresence, motion } from 'framer-motion';

interface FormToggleProps {
	render: (isRequestDemo: boolean) => React.ReactNode;
}

const FormToggle = ({ render }: FormToggleProps) => {
	const [isRequestDemo, setIsRequestDemo] = useState(false);

	const switchTab = (value: string) => {
		setIsRequestDemo(value === 'demo');
	};

	const scrollDown = () => {
        if (['#contact', '#demo'].includes(window.location.hash))
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	const checkHash = () => {
		if (window.location.hash === '#demo') setIsRequestDemo(true);
	};

	useEffect(() => {
		checkHash();
		window.addEventListener('hashchange', checkHash);
		return () => {
			window.removeEventListener('hashchange', checkHash);
		};
	}, []);

	return (
		<>
			<Tabs
				value={isRequestDemo ? 'demo' : 'contact'}
				onValueChange={switchTab}
			>
				<TabsList className='mx-auto my-4 bg-gray-100'>
					<TabsTrigger
						value='contact'
						className='cursor-pointer data-[state=active]:bg-white data-[state=active]:text-cobalt-hover'
					>
						Contact
					</TabsTrigger>
					<TabsTrigger
						value='demo'
						className='cursor-pointer data-[state=active]:bg-white data-[state=active]:text-cobalt-hover'
					>
						Request Demo
					</TabsTrigger>
				</TabsList>
			</Tabs>

			<AnimatePresence mode='wait'>
				<motion.div
					key={isRequestDemo ? 'demo' : 'contact'}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					onAnimationComplete={scrollDown}
				>
					{render(isRequestDemo)}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default FormToggle;
