import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { InlineWidget } from 'react-calendly';

type DialogSurveyProps = {
    openCalendly: boolean;
    setOpenCalendly: React.Dispatch<React.SetStateAction<boolean>>;
    interest: string[] | undefined;
    setInterest: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

export function DialogCalendly({
    openCalendly,
    setOpenCalendly,
    interest,
    setInterest,
}: DialogSurveyProps) {
    return (
        <Dialog
            open={openCalendly}
            onOpenChange={() => {
                setOpenCalendly(!openCalendly);
                console.log(interest);
                setInterest((prev) => []);
            }}
        >
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Calendly</DialogTitle>
                </DialogHeader>

                <InlineWidget
                    url="https://calendly.com/matiaslredes/course?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f4f4f4&primary_color=003fd1"
                    prefill={{
                        customAnswers: {
                            a1: interest?.toString(),
                        },
                    }}
                />

                <DialogFooter></DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
