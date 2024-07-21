import { useState, useEffect } from 'react';
import './Comments.css/'

export default function Comments() {

    const baseUrl = 'http://localhost:3030/jsonstore';
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`${baseUrl}/comments`);
            const data = await response.json();
            const commentsData = Object.values(data);
            setComments(commentsData);
        })();
    }, []);

    return (
        <>
            <section className="py-5 mb-5">
                <div className="container">
                    <div className="recent-work-header row text-center pb-5">
                        <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5"><i className='bx-fw bx bx-smile bx-xs'></i> Happy Clients <i className='bx-fw bx bx-smile bx-xs'></i></h2>
                    </div>
                    <div className="row gy-5 g-lg-5 mb-4">

                        {comments.map(comment =>
                            <div key={comment._id} className="col-md-4 mb-3">
                                <div className="card shadow-lg overflow-hidden">
                                    <div className="  d-flex align-items-center">
                                        <div className="recent-work-content text-start mb-3 ml-3 text-dark no-decoration">
                                            <h3 className="card-title light-300">{comment.username} for {comment.workout}</h3>
                                            <p>{comment.createdAt}</p>
                                            <p className="card-text">{comment.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    );
}