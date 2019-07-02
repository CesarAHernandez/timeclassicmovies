import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import SingleMovie from './components/SingleMovie';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import Membership from './components/Membership';
import Footer from './components/Footer';
import GenreList from './components/GenreList';

class App extends Component {
    state = {
        isLoggedIn: JSON.parse(localStorage.getItem('AppData')).isLoggedIn,
        token: null,
        type: ''
    };
    _loginUser = (email, password) => {
        $('#login-form button')
            .attr('disabled', 'disabled')
            .html('<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>');
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        axios
            .post('http://classicmovies.test/api/user/login/', formData)
            .then(json => {
                if (json.data.success) {
                    alert('Login Successful!');

                    let userData = {
                        name: json.data.data.name,
                        id: json.data.data.id,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData.auth_token
                    };
                    // save app state with user date in local storage
                    localStorage['AppData'] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        type: 'Bearer',
                        token: userData.auth_token
                    });
                } else alert('Login Failed!');

                $('#login-form button')
                    .removeAttr('disabled')
                    .html('Login');
                window.location.href = '/';
            })
            .catch(error => {
                alert(`An Error Occured! ${error}`);
                $('#login-form button')
                    .removeAttr('disabled')
                    .html('Login');
            });
    };
    _registerUser = (name, email, password) => {
        $('#email-login-btn')
            .attr('disabled', 'disabled')
            .html('<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>');

        var formData = new FormData();
        formData.append('type', 'email');
        formData.append('password', password);
        formData.append('email', email);
        formData.append('name', name);

        axios
            .post('http://classicmovies.test/api/user/register', formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    alert(`Registration Successful!`);
                    const { name, id, email, auth_token } = json.data.data;
                    let userData = {
                        name,
                        id,
                        email,
                        auth_token,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        token: userData.auth_token
                    };
                    // save app state with user date in local storage
                    localStorage['AppData'] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        type: 'Bearer',
                        token: appState.token
                    });
                    // redirect home
                    window.location.href = '/';
                } else {
                    alert(`Registration Failed!`);
                    $('#email-login-btn')
                        .removeAttr('disabled')
                        .html('Register');
                }
            })
            .catch(error => {
                alert('An Error Occured!' + error);
                console.log(`${formData} ${error}`);
                $('#email-login-btn')
                    .removeAttr('disabled')
                    .html('Register');
            });
    };
    _logoutUser = () => {
        let appState = {
            isLoggedIn: false,
            token: null,
            type: ''
        };
        // save app state with user date in local storage
        localStorage['AppData'] = JSON.stringify(appState);
        location.reload(true);
        this.setState(appState);
    };
    componentDidMount() {
        if (localStorage['AppData']) {
            let { token, isLoggedIn, type } = JSON.parse(localStorage['AppData']);
            if (token) {
                this.setState({ isLoggedIn, token, type });
            }
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation isLoggedIn={this.state.isLoggedIn} logoutUser={this._logoutUser} />
                    <Switch>
                        <Route path="/" render={props => <Home {...props} logoutUser={this._logoutUser} />} exact />
                        <Route path="/about" component={About} />
                        <Route path="/login" render={props => <Login {...props} loginUser={this._loginUser} />} exact />
                        <Route path="/register" render={props => <Register {...props} registerUser={this._registerUser} />} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/movie/:id" component={SingleMovie} exact />
                        <Route path="/membership" component={Membership} />
                        <Route path="/movie/:category/:slug" component={GenreList} />
                        <Route component={ErrorPage} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
