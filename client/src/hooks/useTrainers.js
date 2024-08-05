import { useEffect, useState } from "react";

import trainersAPI from "../api/trainers-api.js";

export function useGetAllTrainers() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await trainersAPI.getAll();

            setTrainers(result);
        })();
    }, []);

    return [trainers, setTrainers];
}

export function useGetOneTrainers(trainerId) {
    const [trainer, setTrainer] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await trainersAPI.getOne(trainerId);

                setTrainer(result);
            } catch (err) {
                navigate('/not-found');
                return;
            }
        })();
    }, [trainerId]);

    return [trainer, setTrainer];
}

export function useCreateTrainer() {
    const trainerCreateHandler = (trainerData) => trainersAPI.create(trainerData);

    return trainerCreateHandler;
}