import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (username, text) => await requester.post(BASE_URL, { username, text });

const getAll = async () => {
    const result = await requester.get(BASE_URL);

    const comments = Object.values(result);
    
    return comments;
}

const getAllForOneWorkout = (workoutId) => {
    const params = new URLSearchParams({
        where: `workoutId="${workoutId}"`
    });

    const result = requester.get(`${BASE_URL}?${params.toString()}`);

    return result;
}

const commentsAPI = {
    create,
    getAll,
    getAllForOneWorkout,
};

export default commentsAPI;