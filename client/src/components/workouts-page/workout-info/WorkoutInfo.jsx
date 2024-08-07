import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneWorkouts } from '../../../hooks/useWorkouts';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';
import { useCreateComment, useDeleteComment, useGetOneWorkoutComments } from '../../../hooks/useComments';
import commentsAPI from '../../../api/comments-api';

const initialValues = {
    text: "",
    workoutId: "",
};

export default function WorkoutInfo() {
    const { workoutId } = useParams();
    const [workout] = useGetOneWorkouts(workoutId);
    const { userId, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [comments, setComments] = useGetOneWorkoutComments(workoutId);
    const createComment = useCreateComment();
    const deleteComment = useDeleteComment();

    const [error, setError] = useState('');

    const adminId = "60f0cf0b-34b0-4abd-9769-8c42f830dffc";
    const isAdmin = userId === adminId;

    const addCommentHandler = async ({ text }) => {
        if (!text) {
            return setError('Empty field.. You should type a comment')
        }
        try {
            const newComment = await createComment(workoutId, text);
            setComments(oldComments => [...oldComments, newComment]);
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }
    };

    const deleteCommentHandler = (commentId) => {
        try {
            deleteComment(commentId);
            setComments(oldComments => [...oldComments.filter(c => c._id !== commentId)]);
        } catch (err) {
            console.log(err.message)
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, addCommentHandler);

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <h1>{workout.name}</h1>
                <p>Description: {workout.description}</p>
                <div style={{ marginBottom: 50 }} >
                    <img src={workout.img} style={{ maxWidth: 200 }} />
                </div>

                {comments.length > 0
                    ? comments.map(comment =>
                        <div key={comment._id}>
                            <div>
                                <p>
                                    {comment.author?.username}: {comment.text}

                                    {comment._ownerId === userId &&
                                        <input
                                            style={{ maxWidth: 200 }}
                                            type="submit" className="submit"
                                            value="Delete"
                                            onClick={() => deleteCommentHandler(comment._id)} />
                                    }
                                </p>
                            </div>
                        </div>)
                    : <p>No comments yet</p>
                }

                {isAuthenticated && !isAdmin &&
                    <form style={{ maxWidth: 500, marginBottom: 50 }} onSubmit={submitHandler}>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', gap: 20, maxWidth: 500 }}>

                            <input
                                style={{ width: 400 }}
                                type="text"
                                id="text"
                                name="text"
                                placeholder="Type your comment..."
                                value={values.text}
                                onChange={changeHandler}
                            />

                            <input style={{ maxWidth: 200 }} type="submit" className="submit" value="Add Comment" />
                            {error && (
                            <p>
                                <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                            </p>
                        )}
                        </div>

                    </form>
                }

                {isAdmin &&
                    <div style={{ margin: 50 }}>
                        <Link to={`/workouts/edit/${workoutId}`} style={{ margin: 10 }}>
                            <input type="submit" className="submit" value="Edit" />
                        </Link>
                        <Link to={`/workouts/delete/${workoutId}`} style={{ margin: 10 }}>
                            <input type="submit" className="submit" value="Delete" />
                        </Link>
                    </div>
                }
            </div>
        </>
    );
}