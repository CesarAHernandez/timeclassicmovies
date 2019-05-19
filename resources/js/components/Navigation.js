import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div id="nav-bar">
                <div className="logo">
                    <NavLink to="/">
                        <img src="https://i.imgur.com/mBYRhyS.png" />
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/catalog">Catalog</NavLink>
                    <NavLink to="/membership">Membership</NavLink>
                    {(() => {
                        return this.props.isLoggedIn ? <a onClick={this.props.logoutUser}>Log Out</a> : <NavLink to="/login">Log In</NavLink>;
                    })()}
                </div>
            </div>
        );
    }
}
