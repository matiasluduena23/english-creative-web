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
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';

type DialogFormProps = {
    openForm: boolean;
    setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
    interest: string[] | undefined;
};

export function DialogForm({
    openForm,
    setOpenForm,
    interest,
}: DialogFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = () => console.log('hola');

    return (
        <Dialog open={openForm} onOpenChange={() => setOpenForm(!openForm)}>
            <DialogContent className="sm:max-w-[375px] bg-white">
                <DialogHeader>
                    <DialogTitle>Fill the form please</DialogTitle>
                </DialogHeader>
                <form className="w" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-4">
                        <Input
                            type="text"
                            placeholder="Name"
                            {...register('Name', { required: true })}
                        />
                        {errors['Name'] && (
                            <span className="absolute -bottom-4 left-1 text-red-500 text-sm">
                                name is require
                            </span>
                        )}
                    </div>
                    <div className="relative mb-4">
                        <Input
                            type="text"
                            placeholder="Email"
                            {...register('Email', {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                        />
                        {errors['Email'] && (
                            <span className="absolute -bottom-4 left-1 text-red-500 text-sm">
                                email is require
                            </span>
                        )}
                    </div>
                    <div className="relative mb-4">
                        <Input
                            className="mb-3"
                            type="tel"
                            placeholder="Mobile number"
                            {...register('Mobile number', {
                                minLength: 6,
                                maxLength: 12,
                            })}
                        />
                    </div>
                    <div className="relative ">
                        <Textarea
                            defaultValue={interest && interest.join('\n')}
                            {...register('message', { required: true })}
                        />
                        {errors['message'] && (
                            <span className="absolute -bottom-4 left-1 text-red-500 text-sm">
                                message is require
                            </span>
                        )}
                    </div>
                    <Button
                        type="submit"
                        className="mt-5"
                        defaultValue={interest}
                    >
                        Send
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
