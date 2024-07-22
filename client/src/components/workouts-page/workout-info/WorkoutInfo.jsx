import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function WorkoutInfo() {
    const [workout, setWorkout] = useState({});
    const { workoutId } = useParams();

    useEffect(() => {
        (async () => {
            const response = await fetch(`${baseUrl}/workouts/${workoutId}`);
            const data = await response.json();
            const workoutData = data;
            setWorkout(workoutData);
        })();
    }, []);

    return (
        <>
            <div style={{paddingTop: 200}}>
                <h1>{workout.name}</h1>
                <p>{workout.info}</p>
                <p>{workout.description}</p>
                {/* TODO img path <div className="gallery">
                    <img src={workout.img} />
                </div> */}
            </div>
        </>
    );
}