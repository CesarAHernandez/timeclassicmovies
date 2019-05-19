import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
    var movies = [1, 2, 3, 4, 11, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
    return (
        <div id="catalog-page" className="container">
            <h1>Catalog</h1>
            <div className="search-container">
                <span>This is where search will go</span>
            </div>
            <div className="grid">
                {movies.map(value => {
                    return (
                        <div className="video">
                            <Link to={`/movie/${value}`}>
                                <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" />
                            </Link>
                            <div className="video-title">detective pikachu</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Catalog;
