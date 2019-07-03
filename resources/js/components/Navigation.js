import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="orange lighten-4">
                <div class="nav-wrapper">
                    <NavLink to="/" className="brand-logo">
                        <div className="black-text">Time Classic Movies</div>
                    </NavLink>

                    <ul id="nav-mobile" className="valign-wrapper right hide-on-med-and-down ">
                        <li>
                            <NavLink className="black-text" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="black-text" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="black-text" to="/catalog">
                                Catalog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="black-text" to="/membership">
                                Membership
                            </NavLink>
                        </li>
                        <li>
                            {(() => {
                                return this.props.isLoggedIn ? (
                                    <a className="black-text" onClick={this.props.logoutUser}>
                                        Log Out
                                    </a>
                                ) : (
                                    <NavLink className="black-text" to="/login">
                                        Log In
                                    </NavLink>
                                );
                            })()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
