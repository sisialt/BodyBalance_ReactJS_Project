import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function TrainerInfo() {
    const [trainer, setTrainer] = useState({});
    const { trainerId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${baseUrl}/trainers/${trainerId}`);
                const data = await response.json();
                const trainerData = data;
                setTrainer(trainerData);
            } catch (error) {
                navigate('/not-found');
                return;
            }

        })();
    }, []);

    return (
        <>
            <div style={{ paddingTop: 200 }}>
                <h1>{trainer.firstName} {trainer.lastName}</h1>
                <p>{trainer.info}</p>
                <p>Workouts: {trainer.workouts}</p>
                <div className="gallery">
                    <img src={trainer.img} />
                </div>
            </div>
        </>
    );
}