import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export default function AuthenticatedAdminView({children}) {
    const { isAuthenticated, userId } = useContext(AuthContext);
    const adminId = "60f0cf0b-34b0-4abd-9769-8c42f830dffc";

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    };

    if (userId !== adminId) {
        return <Navigate to="/access-denied" />
    }

    return (
        <>
            {children}
        </>
    );
}