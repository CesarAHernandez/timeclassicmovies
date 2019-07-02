import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <NavLink to="/" className="brand-logo">
                        <img className="valign-wrapper responsive-img logo" src="https://i.imgur.com/mBYRhyS.png" />
                    </NavLink>

                    <ul id="nav-mobile" class="valign-wrapper right hide-on-med-and-down">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog">Catalog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/membership">Membership</NavLink>
                        </li>
                        <li>
                            {(() => {
                                return this.props.isLoggedIn ? <a onClick={this.props.logoutUser}>Log Out</a> : <NavLink to="/login">Log In</NavLink>;
                            })()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
