'use client';
import logo from '../../assets/logo.png';
import clsx from 'clsx';
import { useShadowNavigation, useShowNavigation } from '@/lib/hooks';
import Navigation from './Navigation';

export default function Header() {
	const show = useShowNavigation();
	const shadow = useShadowNavigation();

	return (
		<header
			className={clsx(
				'bg-background py-6 sticky left-0  right-0 w-full z-20 ',
				show ? 'top-0' : '',
				shadow ? 'shadow-xl' : ''
			)}
		>
			<nav className="flex justify-between items-center container mx-auto max-w-[1200px]">
				<a href="#home" className="w-60">
					<img
						src={logo.src}
						alt="english creative logo"
						loading="eager"
					/>
				</a>

				<Navigation />
			</nav>
		</header>
	);
}
