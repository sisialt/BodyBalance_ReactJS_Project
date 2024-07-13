import './Schedule.css'

export default function Schedule() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center mb-4 h2 semi-bold-600 py-5"><i className='bx-fw bx bx-calendar bx-xs'></i> Weekly Schedule <i className='bx-fw bx bx-calendar bx-xs'></i></h2>
                        <div className="table-wrap shadow-lg">
                            <table className="table table-bordered text-center round-border">
                                <thead>
                                    <tr>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i className="fa fa-close"></i></td>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
                                        </td>
                                        <td><i className="fa fa-close"></i></td>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
                                        </td>
                                        <td><i className="fa fa-close"></i></td>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
                                        </td>
                                        <td><i className="fa fa-close"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
                                        </td>
                                        <td><i className="fa fa-close"></i></td>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
                                        </td>
                                        <td><i className="fa fa-close"></i></td>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
                                        </td>
                                        <td><i className="fa fa-close"></i></td>
                                        <td className="text-center"><div className="img rounded-circle mb-2" ></div>
                                            <a href="#"><strong>Yoga training</strong> <br/>
                                                7 am-6 am</a>
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