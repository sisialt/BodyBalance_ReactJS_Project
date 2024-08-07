import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function UserInfo() {
    const contextData = useContext(AuthContext);

    return (
        <>
            <div className="container" style={{ paddingTop: 50 }}>
                <h1 style={{textAlign: "center"}}>User Info</h1>

                <form style={{maxWidth: 500, marginBottom: 50}}>

                    <div style={{display: "flex", flexDirection: "column", gap: 20, maxWidth: 500}}>
                        <p>Email: {contextData.email}</p>
                        <p>Password: ******</p>

                        <Link to="/logout"><input type="submit" className="submit" value="Logout" /></Link>

                    </div>

                </form>
            </div>
        </>
    );
}