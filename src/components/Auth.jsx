import React, { useState } from 'react';

const SignUpForm = ({ onSignInClick }) => (
    <div className="container1">
        <h1 className="form-title">Register</h1>
        <form method="post" action="register.php">
            <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" name="fName" id="fName" placeholder="First Name" required />
                <label htmlFor="fName">First Name</label>
            </div>
            <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" name="lName" id="lName" placeholder="Last Name" required />
                <label htmlFor="lName">Last Name</label>
            </div>
            <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" id="email" placeholder="Email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="Password" required />
                <label htmlFor="password">Password</label>
            </div>
            {/* The onClick is removed as the form's `action` handles submission */}
            <input type="submit" className="btn1" value="Sign Up" name="signUp" />
        </form>
        <div className="links">
            <p>Already Have Account?</p>
            <button onClick={onSignInClick}>Sign In</button>
        </div>
    </div>
);

const SignInForm = ({ onSignUpClick }) => (
    <div className="container1">
        <h1 className="form-title">Sign In</h1>
        <form method="post" action="login.php">
            <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" id="email-signin" placeholder="Email" required />
                <label htmlFor="email-signin">Email</label>
            </div>
            <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" id="password-signin" placeholder="Password" required />
                <label htmlFor="password-signin">Password</label>
            </div>
            <p className="recover">
                <a href="#">Recover Password</a>
            </p>
            {/* The onClick is removed as the form's `action` handles submission */}
            <input type="submit" className="btn1" value="Sign In" name="signIn" />
        </form>
        <div className="links">
            <p>Don't have an account yet?</p>
            <button onClick={onSignUpClick}>Sign Up</button>
        </div>
    </div>
);

const Auth = () => {
    const [showSignIn, setShowSignIn] = useState(true);

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