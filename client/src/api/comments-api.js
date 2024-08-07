import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (workoutId, text) => await requester.post(BASE_URL, { workoutId, text });

const getAll = async () => {
    const result = await requester.get(BASE_URL);

    const comments = Object.values(result);
    
    return comments;
}

const getAllForOneWorkout = async (workoutId) => {
    const params = new URLSearchParams({
        where: `workoutId="${workoutId}"`,
        load: `author=_ownerId:users`,
    });
    
    const result = await requester.get(`${BASE_URL}?${params.toString()}`);

    return result;
}

const getLatestThree = async () => {
    const params = new URLSearchParams({
        load: `author=_ownerId:users`,
    });

    const result = await requester.get(`${BASE_URL}?load=author%3D_ownerId%3Ausers%2Cworkout%3DworkoutId%3Aworkouts&pageSize=3`);

    const latestThreeComments = Object.values(result);
    
    return latestThreeComments;
}

export const remove = (commentId) => requester.del(`${BASE_URL}/${commentId}`);

const commentsAPI = {
    create,
    getAll,
    getAllForOneWorkout,
    getLatestThree,
    remove,
};

export default commentsAPI;