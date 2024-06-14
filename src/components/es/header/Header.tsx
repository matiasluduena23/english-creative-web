'use client';
import logo from '@/assets/logo.png';
import clsx from 'clsx';
import { useShadowNavigation, useShowNavigation } from '@/lib/hooks';
import Navigation from './Navigation';
import { GlobeIcon } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { Button } from '@/components/ui/button';

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
				<div className="sm:hidden">
					<Popover>
						<PopoverTrigger asChild className="">
							<Button
								variant="ghost"
								className="group hover:bg-transparent flex items-center gap-1"
							>
								<p className="group-hover:opacity-70 mb-1 text-xl ">
									Lang
								</p>
								<GlobeIcon className="group-hover:opacity-70" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-30 flex flex-col gap-2 font-semibold">
							<a
								href={getRelativeLocaleUrl('en')}
								className="text-foreground hover:opacity-70"
							>
								EN
							</a>
							<a
								href={getRelativeLocaleUrl('es')}
								className="text-foreground hover:opacity-70"
							>
								ES
							</a>
						</PopoverContent>
					</Popover>
				</div>
				<Navigation />
			</nav>
		</header>
	);
}
