import React, { useState } from "react";
import { auth, googleProvider } from "../../services/firebase";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/"); // Login successful → go to dashboard
        } catch (err) {
            console.error("Login error:", err);

            // Handle specific errors
            if (err.code === "auth/user-not-found") {
                setError("User not found. Redirecting to register...");
                setTimeout(() => {
                    navigate("/register");
                }, 2000); // Wait 2 seconds then go to Register
            } else if (err.code === "auth/wrong-password") {
                setError("Incorrect password.");
            } else if (err.code === "auth/invalid-email") {
                setError("Invalid email address.");
            } else {
                setError(err.message);
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/"); // Success → Dashboard
        } catch (err) {
            console.error("Google login error:", err);
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>

            <p>OR</p>

            <button onClick={handleGoogleLogin}>Sign in with Google</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <p>
                Don’t have an account?{" "}
                <button onClick={() => navigate("/register")}>Register</button>
            </p>
        </div>
    );
};

export default Login;
