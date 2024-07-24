import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './WorkoutsPage.css';

export default function WorkoutsPage() {
    const baseUrl = 'http://localhost:3030/jsonstore';
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        async function getWorkouts() {
            const response = await fetch(`${baseUrl}/workouts`);
            const data = await response.json();
            const workoutData = Object.values(data);
            setWorkouts(workoutData);
        }
        getWorkouts();
    }, []);

    return (
        <>
            <div >
                <h1 className="workouts-heading">Workouts</h1>
                <div className="container workouts-page">

                    {workouts.map(workout =>
                        <Link key={workout._id} to={workout._id}>
                            <article>
                                <div className="inner">
                                    <figure className="media">
                                        <img src={workout.img} />
                                    </figure>
                                    <section className="content">
                                        <p className="author">{workout.name}</p>
                                        <p className="desc">{workout.description}</p>
                                    </section>
                                </div>
                            </article>
                        </Link>
                    )}

                </div>
            </div>
        </>
    );
}