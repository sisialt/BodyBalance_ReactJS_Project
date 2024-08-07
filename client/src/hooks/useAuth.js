import { login, register, logout } from "../api/auth-api.js";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return authData;
    }

    return registerHandler;
};

export const useLogout = () => {
    const { logout: localLogout } = useContext(AuthContext);

    const logoutHandler = async () => {
        try {
            localLogout();
            await logout();
        } catch (err) {
            localStorage.clear();
        } 
    };

    return logoutHandler;
}