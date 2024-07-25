import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function WorkoutInfo() {
    const [workout, setWorkout] = useState({});
    const { workoutId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${baseUrl}/workouts/${workoutId}`);
                const data = await response.json();
                const workoutData = data;
                setWorkout(workoutData);
            } catch (error) {
                navigate('/not-found');
                return;
            }

        })();
    }, []);

    return (
        <>
            <div style={{ paddingTop: 200 }}>
                <h1>{workout.name}</h1>
                <p>{workout.info}</p>
                <p>{workout.description}</p>
                <div className="gallery">
                    <img src={workout.img} />
                </div>
            </div>
        </>
    );
}