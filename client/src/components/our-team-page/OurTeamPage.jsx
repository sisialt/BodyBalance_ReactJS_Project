import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../workouts-page/WorkoutsPage';

export default function OurTeamPage() {
    const baseUrl = 'http://localhost:3030/jsonstore';
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        async function getTrainers() {
            const response = await fetch(`${baseUrl}/trainers`);
            const data = await response.json();
            const trainersData = Object.values(data);
            setTrainers(trainersData);
        }
        getTrainers();
    }, []);

    return (
        <>
            <div >
                <h1 className="workouts-heading">Trainers</h1>
                <div className="container workouts-page">

                    {trainers.map(trainer =>
                        <Link key={trainer._id} to={trainer._id}>
                            <article>
                                <div className="inner">
                                    <figure className="media">
                                        <img src={trainer.img} />
                                    </figure>
                                    <section className="content">
                                        <p className="author">{trainer.firstName} {trainer.lastName}</p>
                                        <p className="desc">{trainer.info}</p>
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