import { useParams } from "react-router-dom";
import { useGetOneWorkouts } from "../../../hooks/useWorkouts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import workoutsAPI from "../../../api/workouts-api";


const initialValues = {
    name: "",
    info: "",
    description: "",
    img: "",
    likes: 0,
};

export default function WorkoutEdit() {
    const { workoutId } = useParams();
    const [workout] = useGetOneWorkouts(workoutId);
    const navigate = useNavigate();

    const editHandler = (workout) => {
        try {
            workoutsAPI.update(workoutId, workout);
            navigate(`/workouts/${workoutId}`);
        } catch (err) {
            console.log(err);
        }
        
    }

    const { values, changeHandler, submitHandler } = useForm(workout, editHandler, true);

    return (
        <>
            <div className="container" style={{ paddingTop: 50 }}>
                <h1 style={{ textAlign: "center" }}>Edit Workout</h1>

                <form style={{ maxWidth: 500, marginBottom: 50 }} onSubmit={submitHandler}>

                    <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 500 }}>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={changeHandler}
                        />

                        <label htmlFor="info">Short Info: </label>
                        <input
                            type="info"
                            id="info"
                            name="info"
                            value={values.info}
                            onChange={changeHandler}
                        />

                        <label htmlFor="description">Description: </label>
                        <input
                            type="description"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={changeHandler}
                        />

                        <label htmlFor="img">Image Src: </label>
                        <input
                            type="img"
                            id="img"
                            name="img"
                            value={values.img}
                            onChange={changeHandler}
                        />

                        <input type="submit" className="submit" value="Edit Workout" />
                    </div>

                </form>
            </div>

        </>
    );
}
