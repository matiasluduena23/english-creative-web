import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';

export default function ToggleNavigation() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={() => setOpen(!open)} modal={false}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className="border border-darkGreen text-darkGreen hover:text-background hover:bg-darkGreen transition-colors"
				>
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-darkGreen border-none">
				<ul className=" pt-14 flex flex-col justify-between gap-9 items-center font-Baloo text-xl font-semibold text-background">
					<li>
						<a
							className="hover:opacity-70"
							onClick={() => setOpen(!open)}
							href="#services"
						>
							Services
						</a>
					</li>
					<li>
						<a
							className="hover:opacity-70"
							href="#about"
							onClick={() => setOpen(!open)}
						>
							About
						</a>
					</li>
					<li>
						<a className="hover:opacity-70" href="">
							Testimonials
						</a>
					</li>
					<li>
						<a className="hover:opacity-70" href="">
							Podcast
						</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
			</SheetContent>
		</Sheet>
	);
}
