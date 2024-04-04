import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { formInputsProps } from '@/data/survey';
import { couching, translate } from '@/data/survey';
import CheckboxMultiple from './CheckboxMultiple';
import { DialogSurvey } from '@/components/survey/DialogSurvey';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function () {
    const [open, setOpen] = useState(false);
    const [interest, setInterest] = useState<string[]>();
    const { register, handleSubmit } = useForm<formInputsProps>();

    const onSubmit: SubmitHandler<formInputsProps> = (data) => {
        const values: string[] = Object.values(data).filter(
            (item: string | boolean) => item !== false
        );
        setInterest(values);
        setOpen(!open);
    };

    return (
        <div className="">
            <h1 className="text-center text-4xl mb-10 font-Baloo font-semibold  ">
                Complete this checks with your interest
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center  gap-6 ">
                    <Card className="p-6">
                        <CardTitle className="mb-4">Couching</CardTitle>
                        <CheckboxMultiple register={register} data={couching} />
                    </Card>
                    <Card className="p-6">
                        <CardTitle className="mb-4">Translate</CardTitle>
                        <CheckboxMultiple
                            register={register}
                            data={translate}
                        />
                    </Card>
                </div>

                <input
                    type="submit"
                    value="Enviar"
                    className="block font-semibold bg-darkBlue text-background py-3 px-6 rounded-xl mt-[4rem] mx-auto w-fit hover:opacity-70 cursor-pointer"
                />
            </form>
            <DialogSurvey open={open} setOpen={setOpen} interest={interest} />
        </div>
    );
}
