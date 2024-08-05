import { useParams } from 'react-router-dom';
import { useGetOneWorkouts } from '../../../hooks/useWorkouts';

export default function WorkoutInfo() {
    const { workoutId } = useParams();
    const [workout] = useGetOneWorkouts(workoutId);

    return (
        <>
            <div style={{ paddingTop: 50, marginLeft: 400, marginRight: 400, marginBottom: 50 }}>
                <h1>{workout.name}</h1>
                <p>{workout.info}</p>
                <p>{workout.description}</p>
                <div className="gallery" >
                    <img src={workout.img} style={{ maxWidth: 200 }} />
                </div>
            </div>
        </>
    );
}