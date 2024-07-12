// export default function Schedule() {
//     const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const hours = ['08:00', '09:00', '10:00', '16:00', '17:00', '18:00',];

//     return (
//         <>  
//             <h2>Weekly Schedule</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Time</th>
//                         {weekdays.map((day, index) => (
//                         <th key={index}>
//                             <td>{day}</td>
//                         </th>
//                     ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {hours.map((hour, index) => (
//                         <tr key={index}>
//                             <td>{hour}</td>
//                             <td>workout</td>
//                             <td>workout</td>
//                             <td>workout</td>
//                             <td>workout</td>
//                             <td>workout</td>
//                             <td>workout</td>
//                             <td>workout</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

import './Schedule.css'

export default function Schedule() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center mb-4">Weekly Schedule</h2>
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