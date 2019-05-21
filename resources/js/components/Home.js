import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        token: localStorage['appState'] ? JSON.parse(localStorage['appState']).user.auth_token : '',
        users: []
    };

    render() {
        var elements = ['1', '2', '3', '1', '2', '3', '1'];
        return (
            <div id="home-page" className="container">
                <div className="hero">
                    <img src="https://i.pinimg.com/originals/3a/a7/29/3aa729e58ccc5ade93239ff883235551.jpg" />
                </div>
                <div className="film-section">
                    {['Action', 'Thriller', 'Cartoon', 'Comedy'].map(genre => {
                        return (
                            <div className="genre-section">
                                <div className="genre">
                                    <h1>{genre}</h1>
                                    <Link to="/catalog">View all</Link>
                                </div>
                                <div className="videos">
                                    {elements.map(value => {
                                        return (
                                            <div className="video">
                                                <Link to={`/movie/${value}`}>
                                                    <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" />
                                                </Link>
                                                <Link to={`/movie/${value}`}>
                                                    <div className="video-title">detective pikachu</div>{' '}
                                                </Link>
                                            </div>
                                        );
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
