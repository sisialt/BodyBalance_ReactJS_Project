import { useEffect, useState } from "react";

import workoutsAPI from "../api/workouts-api.js";

export function useGetAllWorkouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await workoutsAPI.getAll();

            setWorkouts(result);
        })();
    }, []);

    return [workouts, setWorkouts];
}

export function useGetOneWorkouts(workoutId) {
    const [workout, setWorkout] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await workoutsAPI.getOne(workoutId);

                setWorkout(result);
            } catch (error) {
                navigate('/not-found');
                return;
            }
        })();
    }, [workoutId]);

    return [workout, setWorkout];
}

export function useCreateWorkout() {
    const workoutCreateHandler = (workoutData) => workoutsAPI.create(workoutData);

    return workoutCreateHandler;
}

export function useGetMostFavouriteThreeWorkouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await workoutsAPI.getMostFavourite();

            setWorkouts(result);
        })();
    }, []);

    return [workouts, setWorkouts];
}