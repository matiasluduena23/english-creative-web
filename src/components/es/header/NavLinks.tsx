import { ChevronDown, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { getRelativeLocaleUrl } from 'astro:i18n';

export default function NavLinks() {
	return (
		<ul className="hidden md:flex justify-between gap-9 items-center font-Baloo text-xl pt-4 font-semibold">
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
				<a
					className="bg-background text-darkGreen border border-darkGreen pt-[6px] px-4 rounded-tl-3xl rounded-br-3xl hover:bg-darkGreen hover:text-background transition-colors"
					href="#contact"
				>
					Contacto
				</a>
			</li>

			<li>
				<Popover>
					<PopoverTrigger asChild className="">
						<Button
							variant="ghost"
							className="group hover:bg-transparent flex items-center gap-1 mb-2"
						>
							<GlobeIcon />
							<p className="group-hover:opacity-70  mt-[10px] text-xl ">
								ES
							</p>
							<ChevronDown className="group-hover:opacity-70" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-30 flex flex-col gap-2 font-semibold">
						<a
							href={getRelativeLocaleUrl('en')}
							className="text-foreground hover:opacity-70 text-xl"
						>
							EN
						</a>
					</PopoverContent>
				</Popover>
			</li>
		</ul>
	);
}
