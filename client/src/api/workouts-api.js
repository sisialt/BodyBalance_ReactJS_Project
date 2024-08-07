import requester from './requester.js';

const BASE_URL = 'http://localhost:3030/data/workouts';

export const getAll = async () => {
    const result = await requester.get(BASE_URL);

    const workouts = Object.values(result);

    return workouts;
};

export const getOne = async (workoutId) => {
    const workout = await requester.get(`${BASE_URL}/${workoutId}`);

    return workout;
};

export const create = (workoutData) => requester.post(`${BASE_URL}`, workoutData);



export const getMostFavourite = async () => {
    const params = new URLSearchParams({
        sortBy: `likes desc`,
        pageSize: 3,
    })

    const result = await requester.get(`${BASE_URL}?sortBy=likes%20desc&pageSize=3`);

    const mostFavouriteWorkouts = Object.values(result);

    return mostFavouriteWorkouts;
}

export const remove = (workoutId) => requester.del(`${BASE_URL}/${workoutId}`);

export const update = (workoutId, workoutData) => requester.put(`${BASE_URL}/${workoutId}`, workoutData);

const workoutsAPI = {
    getAll,
    getOne,
    create,
    getMostFavourite,
    remove,
    update,
};

export default workoutsAPI;