import { useRegister } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', 'confirm-password': '' };

export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const registerHandler = async (values) => {
        const domains = ['.net', '.com', '.bg'];

        if (values.password != values['confirm-password']) {
            return setError('Password missmatch!');
        };

        if (!values.email || !values.password || !values['confirm-password']) {
            return setError('All fields must be filled!');
        };

        if (!values.email.includes('@')) {
            return setError('Email should contain "@"!');
        };

        if (!values.email.includes('.net') && !values.email.includes('.com') && !values.email.includes('.bg')) {
            return setError('Email should have domain (.net, .com, .bg)!');
        }

        try {
            await register(values.email, values.password);

            navigate('/');
        } catch (err) {
            return setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <>
            <div className="container register-page" style={{ paddingTop: 50 }}>
                <h1 style={{ textAlign: "center" }}>Register</h1>

                <form style={{ maxWidth: 500, marginBottom: 50 }} onSubmit={submitHandler}>

                    <div className="register-container" style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 500 }}>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="your-email@gmail.com"
                            value={values.email}
                            onChange={changeHandler}
                        />

                        <label htmlFor="pass">Password: </label>
                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />

                        <label htmlFor="pass">Confirm Password: </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={values['confirm-password']}
                            onChange={changeHandler}
                        />

                        {error && (
                            <p>
                                <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                            </p>
                        )}

                        <input type="submit" className="submit" value="Register" />
                        <p>If you already have an account you can login <Link to="/login">here</Link>.</p>
                    </div>

                </form>
            </div>
        </>
    );
}