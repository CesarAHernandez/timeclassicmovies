import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ history, registerUser = f => f }) => {
    let _email, _password, _name;

    const handleLogin = e => {
        e.preventDefault();

        registerUser(_name.value, _email.value, _password.value);
    };
    return (
        <div id="register-page" class="container">
            <div className="form-container">
                <form id="login-form" action="" onSubmit={handleLogin} method="post">
                    <span className="form-header">Register</span>
                    <label htmlFor="name-input">Name</label>
                    <div className="form-input">
                        <input
                            ref={input => (_name = input)}
                            // style={styles.input}
                            autoComplete="off"
                            id="email-input"
                            name="email"
                            type="text"
                            className="center-block"
                            placeholder="Name"
                        />
                    </div>
                    <label htmlFor="email-input">Email</label>
                    <div className="form-input">
                        <input
                            ref={input => (_email = input)}
                            // style={styles.input}
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
                        <input
                            ref={input => (_password = input)}
                            // style={styles.input}
                            autoComplete="off"
                            id="password-input"
                            name="password"
                            type="password"
                            className="center-block"
                            placeholder="Type Your password"
                        />
                    </div>
                    <label htmlFor="confirm-password-input">Confirm Password</label>
                    <div className="form-input">
                        <input
                            ref={input => (_password = input)}
                            // style={styles.input}
                            autoComplete="off"
                            id="confirm-password-input"
                            name="password"
                            type="password"
                            className="center-block"
                            placeholder="Confirm Your password"
                        />
                    </div>
                    <span>
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                    <button className="btn" type="submit" id="email-login-btn" href="#facebook">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
