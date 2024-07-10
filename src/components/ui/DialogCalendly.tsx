import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './button';
import { InlineWidget } from 'react-calendly';

export function DialogCalendly() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className=" bg-darkOrange text-background py-3 px-6 rounded-sm  hover:opacity-90 font-semibold pb-3 text-[16px]">
					Book your call
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[95%] sm:max-w-[800px] bg-white">
				<DialogHeader>
					<DialogTitle className="text-center font-Baloo text-2xl text-foreground">
						Calendly
					</DialogTitle>
				</DialogHeader>
				<InlineWidget url="https://calendly.com/englishcreativehub/introductory-call" />

				{/* <InlineWidget url="https://calendly.com/englishcreativehub/introductory-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=FFFFFF&primary_color=09564E" /> */}
			</DialogContent>
		</Dialog>
	);
}
