import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.error(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <>
            <div className="container login-page" style={{ paddingTop: 50 }}>
                <h1 style={{textAlign: "center"}}>Login</h1>

                <form style={{maxWidth: 500, marginBottom: 50}} onSubmit={submitHandler}>

                    <div className="login-container" style={{display: "flex", flexDirection: "column", gap: 20, maxWidth: 500}}>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your-email@gmail.com"
                            value={values.email}
                            onChange={changeHandler}
                        />

                        <label htmlFor="login-pass">Password: </label>
                        <input 
                            type="password"
                            id="login-password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />

                        <input type="submit" className="submit" value="Login" />
                        <p>You can register <Link to="/register">here</Link>.</p>
                    </div>

                </form>
            </div>
        </>
    );
}