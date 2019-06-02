import React, { useState, useEffect } from 'react';
import GridView from './GridView';

import axios from 'axios';

const GenreList = ({ match }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        var url = `/api/movie/${match.params.category}/${match.params.slug}`;
        axios
            .get(url)
            .then(response => response.data)
            .then(json => {
                setMovies(json.data);
                console.log(json.data);
            });
    }, []);
    return (
        <div id="genre-list-page" className="container">
            <h1>{match.params.genre}</h1>
            {movies.length > 0 ? <GridView movies={movies} /> : <div className="loading">Loading...</div>}
        </div>
    );
};
export default GenreList;
