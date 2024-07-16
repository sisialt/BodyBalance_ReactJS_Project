import './WorkoutsPage.css';
import img1 from './after-birth.jpg';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import WorkoutInfo from './workout-info/WorkoutInfo';

export default function WorkoutsPage() {
    return (
        <>
            <div >
                <h1 className="workouts-heading">Workouts</h1>
                <div className="container workouts-page">
                    <Link to="mobility">
                        <article>
                            <div className="inner">
                                <figure className="media">
                                    <img src={img1} />
                                </figure>
                                <section className="content">
                                    <p className="author">Mobility</p>
                                    <p className="desc">Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.</p>
                                </section>
                            </div>
                        </article>
                    </Link>

                    <article>
                        <div className="inner">
                            <figure className="media">
                                <img src={img1} />
                            </figure>
                            <section className="content">
                                <p className="author">Functional Training</p>
                                <p className="desc">Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.</p>
                            </section>
                        </div>
                    </article>

                </div>
            </div>
        </>
    );
}