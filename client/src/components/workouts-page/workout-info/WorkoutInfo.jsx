import { useParams } from 'react-router-dom';
import { useGetOneWorkouts } from '../../../hooks/useWorkouts';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function WorkoutInfo() {
    const { workoutId } = useParams();
    const [workout] = useGetOneWorkouts(workoutId);
    const { userId } = useContext(AuthContext);
    const adminId = "60f0cf0b-34b0-4abd-9769-8c42f830dffc";
    const isAdmin = userId === adminId;

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <h1>{workout.name}</h1>
                <p>Description: {workout.description}</p>
                <div style={{ marginBottom: 50 }} >
                    <img src={workout.img} style={{ maxWidth: 200 }} />
                </div>

                {isAdmin &&
                    <div style={{ margin: 50 }}>
                        <Link to={`/workouts/edit/${workoutId}`} style={{ margin: 10 }}>
                            <input type="submit" className="submit" value="Edit" />
                        </Link>
                        <Link to={`/workouts/delete/${workoutId}`} style={{ margin: 10 }}>
                            <input type="submit" className="submit" value="Delete" />
                        </Link>
                    </div>
                }
            </div>
        </>
    );
}