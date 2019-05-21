import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleMovie = ({ match }) => {
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        poster_location: '',
        synopsis: '',
        hours: 0,
        minutes: 0
    });
    useEffect(() => {
        const url = `http://localhost/api/movie/${match.params.id}`;
        axios
            .get(url)
            .then(data => {
                return data.data;
            })
            .then(json => {
                const movie = json.data;
                //setting the movie state to the movie that we got from the database
                setMovieInfo({
                    title: movie.title,
                    poster_location: movie.poster_location,
                    synopsis: movie.synopsis,
                    hours: 0,
                    minutes: 0
                });
            });
    }, []);

    if (movieInfo.title.length === 0) {
        return <div> Loading... </div>;
    }

    return (
        <div id="singleMovie-page" className="container">
            <h1>{movieInfo.title}</h1>
            <div className="video-trailer">
                <img src={movieInfo.poster_location} />
            </div>
            <div className="video-description">
                <div className="video-img">
                    <div className="video">
                        <img src={movieInfo.poster_location} />
                    </div>
                </div>
                <div className="video-summary">
                    <span className="video-title">{movieInfo.title}</span>
                    <span className="video-length">
                        {movieInfo.hours} hour {movieInfo.minutes} minutes
                    </span>
                    <span className="video-rating">4/5 Stars</span>
                    <span className="video-synopsis">{movieInfo.synopsis}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
