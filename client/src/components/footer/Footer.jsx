import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <footer className="bg-secondary pt-4">
                <div className="container">
                    <div className={`${styles.flex} row py-4`}>

                        <div className="col-lg-3 col-12 align-left">
                            <a className="navbar-brand" href="#">
                                <img className={styles.logo} src='/images/logo-plus-text.png' alt="" width={200} height={100} />
                            </a>

                            <ul className="list-inline footer-icons light-300">
                                <li className="list-inline-item m-0">
                                    <a className="text-light" target="_blank" href="http://facebook.com/">
                                        <i className={`bx bxl-facebook ${styles.icons}`}></i>
                                    </a>
                                </li>
                                <li className="list-inline-item m-0">
                                    <a className="text-light" target="_blank" href="https://www.whatsapp.com/">
                                        <i className={`bx bxl-whatsapp ${styles.icons}`}></i>
                                    </a>
                                </li>
                                <li className="list-inline-item m-0">
                                    <a className="text-light" target="_blank" href="https://www.instagram.com/">
                                        <i className={`bx bxl-instagram ${styles.icons}`}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                            <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
                            <ul className="list-unstyled text-light light-300">
                                <li className="pb-2">
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i><Link to="/" className="text-decoration-none text-light">Home</Link>
                                </li>
                                <li className="pb-2">
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i><Link to="/workouts" className="text-decoration-none text-light py-1">Workouts</Link>
                                </li>
                                <li className="pb-2">
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i><Link to="/our-team" className="text-decoration-none text-light py-1">Our Team</Link>
                                </li>
                                <li className="pb-2">
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i><Link to="/prices" className="text-decoration-none text-light py-1">Prices</Link>
                                </li>
                                {/* <li className="pb-2">
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i><Link to="/contact-us" className="text-decoration-none text-light py-1">Contact Us</Link>
                                </li> */}
                            </ul>
                        </div>

                        

                        <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                            <h2 className="h4 pb-lg-3 text-light light-300">For Client</h2>
                            <ul className="list-unstyled text-light light-300">
                                <li className="pb-2">
                                    <i className='bx-fw bx bx-phone bx-xs'></i><a className="text-decoration-none text-light py-1" href="tel:0888 88 88 88">0888 88 88 88</a>
                                </li>
                                <li className="pb-2">
                                    <i className='bx-fw bx bx-mail-send bx-xs'></i><a className="text-decoration-none text-light py-1" href="mailto:info@body-balance.com">info@body-balance.com</a>
                                </li>
                                <li className="pb-2">
                                    <i className='bx-fw bx bx-building-house bx-xs'></i><a className="text-decoration-none text-light py-1" href="https://www.google.com/search?q=knqz+boris+93+stara+zagora&oq=knqz+boris+93+st&gs_lcrp=EgZjaHJvbWUqCQgDECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKAB0gEIOTQ5OWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8">ul. Knyaz Boris 93, 6000 Stara Zagora</a>
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="w-100 bg-primary py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-lg-6 col-sm-12">
                                <p className="text-lg-start text-center text-light light-300">
                                    Created by Silvia Yotovska for ReactJS final project
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <p className="text-lg-end text-center text-light light-300">
                                    Designed by <a rel="sponsored" className="text-decoration-none text-light" href="https://templatemo.com/" target="_blank"><strong>TemplateMo</strong></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer >
        </>
    );
}