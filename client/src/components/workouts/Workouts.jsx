import { useState,useEffect } from 'react';
import baby from './baby-power2.jpg';
import WorkoutDetails from './workout/workout-details/WorkoutDetails.jsx';
import Workout from './workout/Workout.jsx';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function Workouts() {
    const [workouts, setWorkouts] = useState([]);
    const [showWorkout, setShowWorkout] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    useEffect(() => {
        async function getWorkouts() {
            const response = await fetch(`${baseUrl}/workouts`);
            const data = await response.json();
            const workoutData = Object.values(data);
            setWorkouts(workoutData);
        }
        getWorkouts();
    }, []);

    const showWorkoutClick = () => {
        setShowWorkout(true);
    }

    const changeSelectedWorkout = (w) => {
        setSelectedWorkout(w);
    }

    return (
        <>
            <section className="py-5 mb-5">
                <div className="container">
                    <div className="recent-work-header row text-center pb-5">
                        <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Our Most Visited Workouts</h2>
                    </div>
                    <div className="row gy-5 g-lg-5 mb-4">

                        {showWorkout &&
                            <WorkoutDetails
                                workout={selectedWorkout}
                                onClose={() => setShowWorkout(false)}
                            />
                        }

                        {workouts.map(w => 
                            <Workout
                                key={w._id}
                                workout={w}
                                onClick={showWorkoutClick}
                                onChange={() => changeSelectedWorkout(w)}
                            />
                        )}

                    </div>
                </div>
            </section>
        </>
    );
}