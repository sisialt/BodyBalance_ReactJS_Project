import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import styles from './Header.module.css';

export default function Header() {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <>
            <div className={styles.navCont}>
                <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
                    <div className="container d-flex justify-content-between align-items-center">
                        <Link to="/" className="navbar-brand h1">
                            <img src="/images/logo-image.png" alt="" width={80} height={80} />
                        </Link>

                        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                            <div className="flex-fill mx-xl-5 mb-2">
                                <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link btn-outline-primary rounded-pill px-3">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/workouts" className="nav-link btn-outline-primary rounded-pill px-3">Workouts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/our-team" className="nav-link btn-outline-primary rounded-pill px-3">Our Team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/prices" className="nav-link btn-outline-primary rounded-pill px-3">Prices</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact-us" className="nav-link btn-outline-primary rounded-pill px-3">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar align-self-center d-flex">

                                {isAuthenticated
                                    ? <Link to="/user-info" className="nav-link">
                                        <i className='bx bx-user-circle bx-sm text-primary'></i>
                                        <p>{email.substring(0, email.indexOf("@"))}</p>
                                    </Link>
                                    : <Link to="/login" className="nav-link">
                                        <i className='bx bx-user-circle bx-sm text-primary'></i>
                                        <p>Login/Register</p>
                                    </Link>
                                }

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}