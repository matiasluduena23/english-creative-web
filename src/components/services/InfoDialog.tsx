import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';

export function InfoDialog({ card }: { card: CardInfo }) {
	const { title, info } = card;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2 py-3 px-8 bg-[#23746B] rounded-sm hover:opacity-80">
					<span>More Info</span>
					<ArrowRight className="text-background" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-darkGreen text-background">
				<DialogHeader>
					<DialogTitle className="text-2xl ">{title}</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="">
						<h3 className="font-semibold mb-1">English Couching</h3>
						<p>{info.couching}</p>
					</div>
					<hr />
					<div className="">
						<h3 className="flex items-center font-semibold mb-1">
							Español <ArrowRight className="w-4" /> English
							Translation
						</h3>
						<p>{info.translation}</p>
					</div>
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
