import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useCreateWorkout } from "../../../hooks/useWorkouts";

const initialValues = {
    name: "",
    info: "",
    description: "",
    img: "",
    likes: 0,
};

export default function WorkoutCreate() {
    const navigate = useNavigate();
    const createWorkout = useCreateWorkout();

    const createHandler = async (values) => {
        try {
            const { _id: workoutId } = await createWorkout(values);

            navigate(`/workouts/${workoutId}`);
        } catch (err) {
            // TODO: Set error state and display error
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

    return (
        <>
            <div className="container" style={{ paddingTop: 50 }}>
                <h1 style={{ textAlign: "center" }}>Add New Workout</h1>

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

                        <input type="submit" className="submit" value="Create Workout" />
                    </div>

                </form>
            </div>

        </>
    );
}