import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const loginHandler = async ({ email, password }) => {
        const domains = ['.net', '.com', '.bg'];

        if (!email || !password) {
            return setError('All fields must be filled!')
        }

        if (!values.email.includes('@')) {
            return setError('Email should contain "@"!');
        };

        if (!values.email.includes('.net') && !values.email.includes('.com') && !values.email.includes('.bg')) {
            return setError('Email should have domain (.net, .com, .bg)!');
        }

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            if (err.code === 403) {
                return setError("Login and password don't match!");
            }
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
                            type="text"
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

                        {error && (
                            <p>
                                <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                            </p>
                        )}

                        <p>You can register <Link to="/register">here</Link>.</p>
                    </div>

                </form>
            </div>
        </>
    );
}