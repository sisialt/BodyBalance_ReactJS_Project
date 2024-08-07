import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGetOneWorkouts } from "../../../hooks/useWorkouts";
import workoutsAPI from "../../../api/workouts-api";

export default function WorkoutDelete() {
    const { workoutId } = useParams();
    const [workout] = useGetOneWorkouts(workoutId);
    const navigate = useNavigate();

    const deleteHandler = () => {
        try {
            workoutsAPI.remove(workoutId);
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: 50 }}>Are you sure you want to delete {workout.name} workout?</h1>
            <div style={{ margin: 50, textAlign: "center" }}>
                <Link to={`/workouts`} style={{ margin: 10 }}>
                    <input type="submit" className="submit" value="Yes" onClick={deleteHandler} />
                </Link>
                <Link to={`/workouts/${workoutId}`} style={{ margin: 10 }}>
                    <input type="submit" className="submit" value="No" />
                </Link>
            </div>
        </>
    );
}