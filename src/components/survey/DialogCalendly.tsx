import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { InlineWidget } from 'react-calendly';

type DialogSurveyProps = {
    openCalendly: boolean;
    setOpenCalendly: React.Dispatch<React.SetStateAction<boolean>>;
    interest: string[] | undefined;
};

export function DialogCalendly({
    openCalendly,
    setOpenCalendly,
    interest,
}: DialogSurveyProps) {
    const interestFormat = interest?.join('\n');

    return (
        <Dialog
            open={openCalendly}
            onOpenChange={() => setOpenCalendly(!openCalendly)}
        >
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-center font-Baloo text-2xl text-foreground">
                        Calendly
                    </DialogTitle>
                </DialogHeader>

                <InlineWidget
                    url="https://calendly.com/matiaslredes/course?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f4f4f4&primary_color=003fd1"
                    prefill={{
                        customAnswers: {
                            a1: interestFormat,
                        },
                    }}
                />
                <DialogFooter>
                    <Button
                        onClick={() => setOpenCalendly(!openCalendly)}
                        className="bg-white border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white hover:border-white block mx-auto "
                        variant={'outline'}
                    >
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
