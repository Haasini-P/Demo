import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx'; // Import the hook

// --- SignInForm Sub-Component ---
const SignInForm = ({ onSignUpClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(email, password);
        if (!success) {
            alert('Login failed! Please check your credentials or sign up.');
        }
        // On success, the component will disappear automatically because of the parent's check
    };

    return (
        <div className="container1">
            <h1 className="form-title">Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="email" id="email-signin" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email-signin">Email</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password-signin" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password-signin">Password</label>
                </div>
                <p className="recover"><a href="#">Recover Password</a></p>
                <button type="submit" className="btn1">Sign In</button>
            </form>
            <div className="links">
                <p>Don't have an account yet?</p>
                <button onClick={onSignUpClick}>Sign Up</button>
            </div>
        </div>
    );
};

// --- SignUpForm Sub-Component ---
const SignUpForm = ({ onSignInClick }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(name, email, password);
        // The user is automatically logged in on successful signup
    };

    return (
        <div className="container1">
            <h1 className="form-title">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" id="fName" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="fName">Full Name</label>
                </div>
                <div className="input-group">
                    <input type="email" id="email-signup" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email-signup">Email</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password-signup" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password-signup">Password</label>
                </div>
                <button type="submit" className="btn1">Sign Up</button>
            </form>
            <div className="links">
                <p>Already Have Account?</p>
                <button onClick={onSignInClick}>Sign In</button>
            </div>
        </div>
    );
};


// --- Main Auth Component ---
const Auth = () => {
    const [showSignIn, setShowSignIn] = useState(true);
    const { isAuthenticated } = useAuth();

    // If the user is already authenticated, don't render the login/signup forms.
    if (isAuthenticated) {
        return null;
    }

    return (
        <section id="login" className="section">
            {showSignIn ? (
                <SignInForm onSignUpClick={() => setShowSignIn(false)} />
            ) : (
                <SignUpForm onSignInClick={() => setShowSignIn(true)} />
            )}
        </section>
    );
};

export default Auth;