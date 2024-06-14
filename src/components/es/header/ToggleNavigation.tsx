'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { GlobeIcon } from 'lucide-react';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';

export default function ToggleNavigation() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className="border border-darkGreen text-darkGreen hover:text-background hover:bg-darkGreen transition-colors"
				>
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-darkGreen border-none">
				<SheetClose>
					<ul className=" pt-14 flex flex-col justify-between gap-9 items-center font-Baloo text-xl font-semibold text-background">
						<li>
							<a className="hover:opacity-70" href="#services">
								Servicios
							</a>
						</li>
						<li>
							<a className="hover:opacity-70" href="#about">
								Acerca de
							</a>
						</li>
						<li>
							<a className="hover:opacity-70" href="">
								Testimonios
							</a>
						</li>
						<li>
							<a className="hover:opacity-70" href="/podcast/">
								Podcast
							</a>
						</li>
						<li>
							<a href="#contact">Contacto</a>
						</li>
					</ul>
				</SheetClose>
			</SheetContent>
		</Sheet>
	);
}
