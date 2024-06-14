import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CheckIcon } from 'lucide-react';

export function InfoDialog({ card }: { card: CardInfo }) {
	const { title, info } = card;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2 py-3 px-8 bg-[#23746B] rounded-sm hover:opacity-80">
					<span>Mas Info</span>
					<ArrowRight className="text-background" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-darkGreen text-background">
				<DialogHeader>
					<DialogTitle className="text-2xl ">{title}</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="">
						<h3 className="font-semibold mb-2">English Couching</h3>
						<ul>
							{info.couching.map((item, index) => (
								<li
									key={index}
									className="flex items-center gap-1"
								>
									<CheckIcon className="w-4 text-background" />
									<p>{item}</p>
								</li>
							))}
						</ul>
					</div>
					<hr />
					<div className="">
						<h3 className="flex items-center font-semibold mb-2">
							Español <ChevronRight className="w-4 pt-1" />{' '}
							English Translation
						</h3>
						<ul>
							{info.translation.map((item, index) => (
								<li
									key={index}
									className="flex items-center gap-1"
								>
									<CheckIcon className="w-4 text-background" />
									<p>{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
