import { Link } from 'react-router-dom';

import './WorkoutsPage.css';

import { useGetAllWorkouts } from '../../hooks/useWorkouts';

export default function WorkoutsPage() {
    const [workouts] = useGetAllWorkouts();

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