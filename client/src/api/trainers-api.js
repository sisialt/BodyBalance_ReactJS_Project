import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/trainers';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const trainers = Object.values(result);

    return trainers;
};

export const getOne = async (trainerId) => {
    const trainer = await request.get(`${BASE_URL}/${trainerId}`);

    return trainer;
};

export const create = (trainerData) => request.post(`${BASE_URL}`, trainerData);

const trainersAPI = {
    getAll,
    getOne,
    create,
};

export default trainersAPI;