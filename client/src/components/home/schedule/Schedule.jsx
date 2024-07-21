import './Schedule.css';
import { Link } from 'react-router-dom';

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
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Tuesday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/moms-with-babys">
                                                <img className="img rounded-circle mb-2" src="images/moms-babys.jpg" alt="" />
                                                <p><strong>Moms with Babys</strong> <br />10:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/teenagers">
                                                <img className="img rounded-circle mb-2" src="images/teenagers.jpg" alt="" />
                                                <p><strong>Teenagers</strong> <br />16:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Wednesday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Thirsday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/moms-with-babys">
                                                <img className="img rounded-circle mb-2" src="images/moms-babys.jpg" alt="" />
                                                <p><strong>Moms with Babys</strong> <br />10:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/teenagers">
                                                <img className="img rounded-circle mb-2" src="images/teenagers.jpg" alt="" />
                                                <p><strong>Teenagers</strong> <br />16:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />18:30</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Friday</th>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />8:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />9:00</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
                                                <p><strong>Functional training</strong> <br />17:30</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to="/workouts/functional-training">
                                                <img className="img rounded-circle mb-2" src="images/functional-training2.jpg" alt="" />
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
                                            <Link to="/workouts/tabata">
                                                <img className="img rounded-circle mb-2" src="images/tabata.png" alt="" />
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
                                            <Link to="/workouts/batuka">
                                                <img className="img rounded-circle mb-2" src="images/batuka.png" alt="" />
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