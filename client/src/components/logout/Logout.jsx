import { useLogout } from "../../hooks/useAuth";

export default function Logout() {
    const logout = useLogout();
    logout();

    return (
        <>
            <div className="container login-page" style={{ paddingTop: 50, marginBottom: 50 }}>
                <h1 style={{ textAlign: "center" }}>You have successfully logged out!</h1>
            </div>
        </>
    );
}