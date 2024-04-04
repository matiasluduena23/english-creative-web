import type { UseFormRegister } from 'react-hook-form';
import type { formInputsProps } from '@/data/survey';
import { Checkbox } from '../ui/checkbox';

type checkboxMultipleProps = {
    data: formInputsProps[];
    register: UseFormRegister<formInputsProps>;
};
export default function ({ data, register }: checkboxMultipleProps) {
    return (
        <div>
            {data.map((item: formInputsProps) => (
                <div key={item.id} className="flex items-center space-x-2 mb-2">
                    <Checkbox
                        id={item.id}
                        value={item.label}
                        {...register(item.id as 'id')}
                    />{' '}
                    <label htmlFor={item.id} className="leading-none">
                        {item.label}
                    </label>
                    <br />
                </div>
            ))}
        </div>
    );
}
