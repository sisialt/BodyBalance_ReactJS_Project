import { useState } from 'react';

import './Workouts.css'

import { useGetAllWorkouts, useGetMostFavouriteThreeWorkouts } from '../../../hooks/useWorkouts.js';
import WorkoutDetails from './workout/workout-details/WorkoutDetails.jsx';
import Workout from './workout/Workout.jsx';

export default function Workouts() {
    const [workouts] = useGetMostFavouriteThreeWorkouts();
    const [showWorkout, setShowWorkout] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const showWorkoutClick = () => {
        setShowWorkout(true);
    }

    const changeSelectedWorkout = (w) => {
        setSelectedWorkout(w);
    }

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="recent-work-header row text-center pb-5">
                        <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5"><i className='bx-fw bx bx-heart bx-xs'></i> Most Favourite Workouts <i className='bx-fw bx bx-heart bx-xs'></i></h2>
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