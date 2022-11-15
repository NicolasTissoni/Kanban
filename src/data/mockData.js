import {v4 as uuidv4} from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: '📋Por Hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar JavaScript',
            },
            {
                id: uuidv4(),
                title: 'Estudiar React',
            },
            {
                id: uuidv4(),
                title: 'Estudiar Ingles',
            },
        ]
    },
    {
        id: uuidv4(),
        title: '⏳En Progreso',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar JavaScript',
            },
            {
                id: uuidv4(),
                title: 'Estudiar React',
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✔️Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar JavaScript',
            },
        ]
    },
]

export default mockData;