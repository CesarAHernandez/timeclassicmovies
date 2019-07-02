import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Login = ({ history, loginUser = f => f }) => {
    let _email, _password;
    const handleLogin = e => {
        e.preventDefault();
        loginUser(_email.value, _password.value);
    };
    const handleSocialLogin = e => {
        e.preventDefault();
        const newWindow = openWindow('', 'message');
        axios
            .get('/api/login/google')
            .then(response => {
                return response.data;
            })
            .then(json => {
                newWindow.location = json.redirect;
            });
    };
    function openWindow(url, title, options = {}) {
        if (typeof url === 'object') {
            options = url;
            url = '';
        }

        options = { url, title, width: 600, height: 720, ...options };

        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top;
        const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
        const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height;

        options.left = width / 2 - options.width / 2 + dualScreenLeft;
        options.top = height / 2 - options.height / 2 + dualScreenTop;

        const optionsStr = Object.keys(options)
            .reduce((acc, key) => {
                acc.push(`${key}=${options[key]}`);
                return acc;
            }, [])
            .join(',');

        const newWindow = window.open(url, title, optionsStr);

        if (window.focus) {
            newWindow.focus();
        }

        return newWindow;
    }

    const onMessage = e => {
        if (e.origin !== window.origin || !e.data.token) {
            return;
        }
        // thinking about setting this to one object
        localStorage.setItem(
            'AppData',
            JSON.stringify({
                isLoggedIn: true,
                token: e.data.token,
                type: e.data.type
            })
        );
        window.location = e.data.to;
    };
    useEffect(() => {
        window.addEventListener('message', onMessage, false);

        return () => {
            window.removeEventListener('message', onMessage);
        };
    }, []);
    return (
        <div id="login-page" className="container">
            <div className="row">
                <form id="login-form" className="white col s12 m6 offset-m3" action="" onSubmit={handleLogin} method="post">
                    <div className="row">
                        <h2 className="col s6 offset-s3">Login</h2>
                    </div>
                    {/* <label htmlFor="email-input">Email</label> */}
                    <div className="row">
                        <div className="input-field col s12 m6 offset-s0 offset-m3">
                            <input
                                ref={input => (_email = input)}
                                autoComplete="off"
                                id="email-input"
                                name="email"
                                type="text"
                                className="validate"
                                placeholder="Email"
                            />
                            <label className="active black-text" htmlFor="email-input">
                                Email
                            </label>
                        </div>
                    </div>
                    {/* <label htmlFor="password-input">Password</label> */}
                    <div className="row">
                        <div className="input-field col s12 m6 offset-s0 offset-m3">
                            <input
                                ref={input => (_password = input)}
                                autoComplete="off"
                                id="password-input"
                                name="password"
                                type="password"
                                className="validate"
                                placeholder="Password"
                            />
                            <label className="active black-text" htmlFor="password-input">
                                Password
                            </label>
                            <Link to="/register" className="col s7 offset-s7 forgot-password">
                                Forgot Password
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <button class="col s4 offset-s4 btn waves-effect waves-light" type="submit" id="email-login-btn" name="action">
                            Login
                        </button>
                        <button onClick={handleSocialLogin} class="red darken-1 white-text col s4 offset-s4 btn waves-effect waves-light">
                            Login with Google
                        </button>
                        <Link to="/register" className="col s12 offset-s3 register-btn">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
