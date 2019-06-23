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
                    <a href="" onClick={handleSocialLogin}>
                        Login with GOOGLE
                    </a>
                    <Link to="/register" className="register-btn">
                        Register
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
