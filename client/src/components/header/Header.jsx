import logo from './logo-image.png';
import './Header.css'

export default function Header() {
    return (
        <>
            <div className='nav-cont'>
                <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
                    <div className="container d-flex justify-content-between align-items-center">
                        <a className="navbar-brand h1" href="#">
                            <img src={logo} alt="" width={80} height={80} />
                        </a>

                        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                            <div className="flex-fill mx-xl-5 mb-2">
                                <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                                    <li className="nav-item">
                                        <a className="nav-link btn-outline-primary rounded-pill px-3" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-outline-primary rounded-pill px-3" href="#">Workouts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-outline-primary rounded-pill px-3" href="#">Our Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-outline-primary rounded-pill px-3" href="#">Prices</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-outline-primary rounded-pill px-3" href="#">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-outline-primary rounded-pill px-3" href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar align-self-center d-flex">
                                <a className="nav-link" href="#"><i className='bx bx-user-circle bx-sm text-primary'></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}