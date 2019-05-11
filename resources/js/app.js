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
import Navigation from './components/Navigation';

class App extends Component {
    state = {
        isLoggedIn: false,
        user: {}
    };
    _loginUser = (email, password) => {
        $('#login-form button')
            .attr('disabled', 'disabled')
            .html('<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>');
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        axios
            .post('http://localhost/api/user/login/', formData)
            .then(response => {
                console.log(response);
                return response;
            })
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
                        user: userData
                    };
                    // save app state with user date in local storage
                    localStorage['appState'] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                } else alert('Login Failed!');

                $('#login-form button')
                    .removeAttr('disabled')
                    .html('Login');
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
        formData.append('username', 'usernameee');
        formData.append('password', password);
        formData.append('phone', 33322212231);
        formData.append('email', email);
        formData.append('address', 'address okoko');
        formData.append('name', name);
        formData.append('id', 76);

        axios
            .post('http://localhost/api/user/register', formData)
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
                        user: userData
                    };
                    // save app state with user date in local storage
                    localStorage['appState'] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                    // redirect home
                    //this.props.history.push("/");
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
            user: {}
        };
        // save app state with user date in local storage
        localStorage['appState'] = JSON.stringify(appState);
        this.setState(appState);
    };
    componentDidMount() {
        let state = localStorage['appState'];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" render={props => <Home {...props} logoutUser={this._logoutUser} />} exact />

                        <Route path="/about" component={About} />
                        <Route path="/login" render={props => <Login {...props} loginUser={this._loginUser} />} />
                        <Route path="/register" render={props => <Register {...props} registerUser={this._registerUser} />} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
