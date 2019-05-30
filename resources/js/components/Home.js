import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
    state = {
        token: localStorage['appState'] ? JSON.parse(localStorage['appState']).user.auth_token : '',
        frontPageMovies: {}
    };
    componentDidMount() {
        var url = '/api/movies/filteredByGenre';
        axios
            .get(url)
            .then(response => {
                return response.data;
            })
            .then(json => {
                console.log(json);
                this.setState({ frontPageMovies: json.data });
            });
    }

    render() {
        var popularGenres = Object.keys(this.state.frontPageMovies);
        var limit = 7;
        return (
            <div id="home-page" className="container">
                <div className="hero">
                    <img src="https://i.pinimg.com/originals/3a/a7/29/3aa729e58ccc5ade93239ff883235551.jpg" />
                </div>
                <div className="film-section">
                    {popularGenres.map((genre, index) => {
                        return (
                            <div key={index} className="genre-section">
                                <div className="genre">
                                    <h1>{genre}</h1>
                                    <Link to={`/movie/genre/${genre}`}>View all</Link>
                                </div>
                                <div className="videos">
                                    {this.state.frontPageMovies[genre].map((value, index) => {
                                        if (index < limit) {
                                            return (
                                                <div key={index} className="video">
                                                    <Link to={`/movie/${value.id}`}>
                                                        <img src={value.poster_location} />
                                                    </Link>
                                                    <Link to={`/movie/${value.id}`}>
                                                        <div className="video-title">{value.title}</div>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Home;
