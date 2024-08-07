import { Link } from 'react-router-dom';

import './WorkoutsPage.css';

import { useGetAllWorkouts } from '../../hooks/useWorkouts';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function WorkoutsPage() {
    const [workouts] = useGetAllWorkouts();
    const { userId } = useContext(AuthContext);
    const adminId = "60f0cf0b-34b0-4abd-9769-8c42f830dffc";
    const isAdmin = userId === adminId;

    return (
        <>
            <div >
                <h1 className="workouts-heading">Workouts</h1>

                {isAdmin &&
                    <div style={{ textAlign: 'center', marginTop: 50 }}>
                        <Link to='create'>
                            <input type="submit" className="submit" value="+ Add New Workout" />
                        </Link>
                    </div>
                }

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