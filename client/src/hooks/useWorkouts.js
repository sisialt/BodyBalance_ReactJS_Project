import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [workout, setWorkout] = useState({
        name: "",
        info: "",
        description: "",
        img: "",
        likes: 0,
    });
    
    const navigate = useNavigate();

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

export function useDeleteWorkout() {
    const workoutDeleteHandler = (workoutId) => {
        try {
            workoutsAPI.remove(workoutId);

        } catch (err) {
            console.log(err.message)
        }
    }

    return workoutDeleteHandler;
}