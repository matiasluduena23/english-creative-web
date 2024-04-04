type formInputsProps = {
    id: string;
    label: string;
};
const couching: formInputsProps[] = [
    {
        id: 'pitchCouching',
        label: 'Pitch/presentación',
    },
    {
        id: 'entrevistas',
        label: 'Entrevistas laborales',
    },
    {
        id: 'reuniones',
        label: 'Reunion con inversores  ',
    },
    {
        id: 'inversores',
        label: 'Seguimiento con clientes',
    },
    {
        id: 'coaching',
        label: 'Coaching a medida - Business English',
    },
];

const translate: formInputsProps[] = [
    {
        id: 'pitchTranslate',
        label: 'Pitch (1, 3, 5 minutos)',
    },
    {
        id: 'pitchdeck',
        label: 'Pitch deck',
    },
    {
        id: 'video',
        label: 'Video (subtítulos)',
    },
    {
        id: 'comunicacion',
        label: 'Material de comunicación (puntual)',
    },
    {
        id: 'materialcontinuo',
        label: 'Material de comunicación',
    },
];

export type { formInputsProps };
export { couching, translate };
