import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GridView from './GridView';

const Catalog = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost/api/movies/list')
            .then(response => {
                return response.data;
            })
            .then(json => {
                setMovies(json.data);
            });
    }, []);

    return (
        <div id="catalog-page" className="container">
            {movies.length > 0 ? <GridView movies={movies} /> : <div className="loading">Loading...</div>}
        </div>
    );
};
export default Catalog;
