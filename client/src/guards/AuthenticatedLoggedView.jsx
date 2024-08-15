import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export default function AuthenticatedLoggedView({children}) {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to="/user-info" />;
    };

    return (
        <>
            {children}
        </>
    );
}