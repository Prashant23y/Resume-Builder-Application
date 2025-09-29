import React, { useState } from "react";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/Dashboard"); // go to dashboard after successful registration
        } catch (err) {
            console.error("Register error:", err);
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered.");
            } else if (err.code === "auth/invalid-email") {
                setError("Invalid email address.");
            } else if (err.code === "auth/weak-password") {
                setError("Password must be at least 6 characters.");
            } else {
                setError(err.message);
            }
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Create Account</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <p>
                Already have an account?{" "}
                <button onClick={() => navigate("/login")}>Login</button>
            </p>
        </div>
    );
};

export default Register;
