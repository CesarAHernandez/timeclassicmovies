import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Pagination from './Pagination';
import Search from './Search';

const GridList = ({ movies }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const setPage = e => {
        setCurrentPage(Number(e.target.getAttribute('value')));
    };
    return (
        <div className="gridView-container">
            <div className="search-container">
                <Search />
            </div>
            <div className="grid">
                {movies.map((movie, index) => {
                    if (index > currentPage * 30 && index < (currentPage + 1) * 30) {
                        return (
                            <div className="video" key={index}>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={movie.poster_location} />
                                </Link>
                                <div className="video-title">{movie.title}</div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="pagination-container">
                <Pagination setPage={setPage} movies={movies} currentPage={currentPage} />
            </div>
        </div>
    );
};

export default GridList;
