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
import { Image } from 'astro:assets';
import whatsappLogo from '@/assets/whatsappDark.svg';
import emailLogo from '@/assets/email.svg';

type DialogSurveyProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    interest: string[] | undefined;
};

export function DialogSurvey({ open, setOpen, interest }: DialogSurveyProps) {
    const [openForm, setOpenForm] = useState(false);
    const WhatappMsg = 'https://wa.me/3513414789?text=' + { interest };
    const handleClick = () => {
        setOpen(!open);
        setOpenForm(!openForm);
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
                        <p>Email</p>
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
                        <p>WhatApp</p>
                        <a
                            href={WhatappMsg}
                            className="max-w-12 block hover:opacity-80"
                            target="_blank"
                        >
                            <img
                                src={whatsappLogo.src}
                                className="w-full"
                                alt="whatsapp icon"
                            />
                        </a>
                    </div>
                </div>
                <DialogFooter></DialogFooter>
            </DialogContent>
            <DialogForm
                openForm={openForm}
                setOpenForm={setOpenForm}
                interest={interest}
            />
        </Dialog>
    );
}
