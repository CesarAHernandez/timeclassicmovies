import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="container">
                <h1>Navigation</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/login">login</NavLink>
            </div>
        );
    }
}
