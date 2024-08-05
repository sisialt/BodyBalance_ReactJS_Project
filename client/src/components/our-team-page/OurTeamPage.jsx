import { Link } from 'react-router-dom';

import { useGetAllTrainers } from '../../hooks/useTrainers';

export default function OurTeamPage() {
    const [trainers] = useGetAllTrainers();

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