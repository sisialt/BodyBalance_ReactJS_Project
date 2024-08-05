import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/workouts';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const workouts = Object.values(result);

    return workouts;
};

export const getOne = async (workoutId) => {
    const workout = await request.get(`${BASE_URL}/${workoutId}`);

    return workout;
};

export const create = (workoutData) => request.post(`${BASE_URL}`, workoutData);

const workoutsAPI = {
    getAll,
    getOne,
    create,
};

export default workoutsAPI;