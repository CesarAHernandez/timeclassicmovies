import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// frontPageMovies = {
//     action : ['movie1', 'movie12']
// }
class Home extends React.Component {
    state = {
        token: localStorage['appState'] ? JSON.parse(localStorage['appState']).user.auth_token : '',
        frontPageMovies: {}
    };
    componentDidMount() {
        var url = '/api/movies/sortedByGenre';
        axios
            .get(url)
            .then(response => response.data)
            .then(json => {
                console.log('This is the home page movies');
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
                    {popularGenres.map(genre => {
                        return (
                            <div className="genre-section">
                                <div className="genre">
                                    <h1>{genre}</h1>
                                    <Link to="/catalog">View all</Link>
                                </div>
                                <div className="videos">
                                    {this.state.frontPageMovies[genre].map((value, index) => {
                                        if (index < limit) {
                                            return (
                                                <div className="video">
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
