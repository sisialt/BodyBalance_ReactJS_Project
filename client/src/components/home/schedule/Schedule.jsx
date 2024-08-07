import { Link } from 'react-router-dom';

import './Schedule.css';

export default function Schedule() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center mb-4 h2 semi-bold-600 py-5"><i className='bx-fw bx bx-calendar bx-xs'></i> Weekly Schedule <i className='bx-fw bx bx-calendar bx-xs'></i></h2>
                        <div className="table-wrap shadow-lg">
                            <table className="table table-bordered text-center round-border">
                                <tbody>
                                    <tr>
                                        {/* <td><i className="fa fa-close"></i></td> */}
                                        <th>Monday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Tuesday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/d749a819-1e41-4c65-9ce2-7b429c4ebd0d">
                                                <img className="img rounded-circle mb-2" src="images/babys.jpg" alt="" />
                                                <p><strong>Moms with Babys</strong> <br />10:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/r249a819-1e41-4c65-9ce2-7b429c4ebd0d">
                                                <img className="img rounded-circle mb-2" src="images/teen.jpg" alt="" />
                                                <p><strong>Teenagers</strong> <br />16:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Wednesday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Thirsday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/d749a819-1e41-4c65-9ce2-7b429c4ebd0d">
                                                <img className="img rounded-circle mb-2" src="images/babys.jpg" alt="" />
                                                <p><strong>Moms with Babys</strong> <br />10:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/r249a819-1e41-4c65-9ce2-7b429c4ebd0d">
                                                <img className="img rounded-circle mb-2" src="images/teen.jpg" alt="" />
                                                <p><strong>Teenagers</strong> <br />16:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Friday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/6012c542-38e1-4660-ba40-1b109c40cb2f">
                                                <img className="img rounded-circle mb-2" src="images/func-training.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Saturday</th>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/gg49a819-1e41-4c65-9ce2-7b429c4ebd0d">
                                                <img className="img rounded-circle mb-2" src="images/tabata-new.jpg" alt="" />
                                                <p><strong>Tabata</strong> <br />10:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Sunday</th>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/2d5ae478-87c7-45fa-acf9-f04aa4724421">
                                                <img className="img rounded-circle mb-2" src="images/mobility.jpg" alt="" />
                                                <p><strong>Mobility</strong> <br />16:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/p049a819-1e41-4c65-9ce2-7b429c4ebd0d">
                                                <img className="img rounded-circle mb-2" src="images/batuka-new.jpg" alt="" />
                                                <p><strong>Batuka</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}