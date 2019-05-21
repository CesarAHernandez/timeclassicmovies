import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ history, loginUser = f => f }) => {
    let _email, _password;
    const handleLogin = e => {
        e.preventDefault();
        loginUser(_email.value, _password.value);
    };
    return (
        <div id="login-page" class="container">
            <div className="form-container">
                <form id="login-form" action="" onSubmit={handleLogin} method="post">
                    <span className="form-header">Login</span>
                    <label htmlFor="email-input">Email</label>
                    <div className="form-input">
                        <span>login logo</span>
                        <input
                            ref={input => (_email = input)}
                            autoComplete="off"
                            id="email-input"
                            name="email"
                            type="text"
                            className="center-block"
                            placeholder="Type your Email"
                        />
                    </div>
                    <label htmlFor="password-input">Password</label>
                    <div className="form-input">
                        <span>password logo</span>
                        <input
                            ref={input => (_password = input)}
                            autoComplete="off"
                            id="password-input"
                            name="password"
                            type="password"
                            className="center-block"
                            placeholder="Type Your password"
                        />
                    </div>
                    <Link to="/register" className="forgot-password">
                        Forgot Password
                    </Link>
                    <button type="submit" id="email-login-btn" href="#facebook">
                        Login
                    </button>
                    <Link to="/register" className="register-btn">
                        Register
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
