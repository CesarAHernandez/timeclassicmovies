import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Time Classic Movies</h5>
                        <p class="grey-text text-lighten-4">A Place to watch classic movies for free</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">WebSite</h5>
                        <ul>
                            <li>
                                <Link class="grey-text text-lighten-3" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link class="grey-text text-lighten-3" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link class="grey-text text-lighten-3" to="/register">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link class="grey-text text-lighten-3" to="/membership">
                                    Membership
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <a class="grey-text text-lighten-4 right" href="#!" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
