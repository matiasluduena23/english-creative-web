import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { DialogForm } from './DialogForm';
import { useState } from 'react';
import emailLogo from '@/assets/email.svg';
import zoomLogo from '@/assets/zoom.svg';
import { DialogCalendly } from './DialogCalendly';

type DialogSurveyProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    interest: string[] | undefined;
    setInterest: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

export function DialogSurvey({
    open,
    setOpen,
    interest,
    setInterest,
}: DialogSurveyProps) {
    const [openForm, setOpenForm] = useState(false);
    const [openCalendly, setOpenCalendly] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        setOpenForm(!openForm);
    };
    const handleClickCalendly = () => {
        setOpen(!open);
        setOpenCalendly(!openCalendly);
    };

    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        How your prefer to connect with us ?
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="flex justify-around">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p>Send us an Email</p>
                        <button
                            onClick={handleClick}
                            className="max-w-16 block hover:opacity-80"
                        >
                            <img
                                src={emailLogo.src}
                                className="w-12"
                                alt="whatsapp icon"
                            />
                        </button>
                    </div>
                    <div className=" flex flex-col items-center gap-2">
                        <p>Schedule a meeting</p>
                        <button
                            onClick={handleClickCalendly}
                            className="max-w-16 block hover:opacity-80"
                        >
                            <img
                                src={zoomLogo.src}
                                className="w-12"
                                alt="whatsapp icon"
                            />
                        </button>
                    </div>
                </div>
                <DialogFooter></DialogFooter>
            </DialogContent>
            <DialogForm
                openForm={openForm}
                setOpenForm={setOpenForm}
                interest={interest}
                setInterest={setInterest}
            />
            <DialogCalendly
                openCalendly={openCalendly}
                setOpenCalendly={setOpenCalendly}
                interest={interest}
                setInterest={setInterest}
            />
        </Dialog>
    );
}
