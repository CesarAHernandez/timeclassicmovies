import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Search from './Search';

export default class Catalog extends Component {
    state = {
        movies: []
    };
    componentDidMount() {
        axios
            .get('http://localhost/api/movies/list')
            .then(response => {
                return response.data;
            })
            .then(json => {
                this.setState({
                    movies: json.data
                });
            });
    }
    render() {
        var { movies } = this.state;
        return (
            <div id="catalog-page" className="container">
                <h1>Catalog</h1>
                <div className="search-container">
                    <Search />
                </div>
                <div className="grid">
                    {movies.map((movie, index) => {
                        return (
                            <div className="video" key={index}>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={movie.poster_location} />
                                </Link>
                                <div className="video-title">{movie.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
