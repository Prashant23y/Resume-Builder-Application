import React from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left" onClick={() => navigate("/")}>
                <h1 className="navbar-logo">Resume Builder</h1>
            </div>

            {user && (
                <div className="navbar-right">
                    <span className="navbar-user">{user.email}</span>
                    <button className="navbar-logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
