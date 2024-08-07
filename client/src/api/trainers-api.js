import requester from './requester.js';

const BASE_URL = 'http://localhost:3030/data/trainers';

export const getAll = async () => {
    const result = await requester.get(BASE_URL);

    const trainers = Object.values(result);

    return trainers;
};

export const getOne = async (trainerId) => {
    const trainer = await requester.get(`${BASE_URL}/${trainerId}`);

    return trainer;
};

export const create = (trainerData) => requester.post(`${BASE_URL}`, trainerData);

const trainersAPI = {
    getAll,
    getOne,
    create,
};

export default trainersAPI;