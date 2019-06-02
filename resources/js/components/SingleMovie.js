import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Video from '../components/Video';

const SingleMovie = ({ match }) => {
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        poster_location: '',
        synopsis: '',
        genres: [],
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
                console.log(movie);
                setMovieInfo({
                    title: movie.title,
                    poster_location: movie.poster_location,
                    synopsis: movie.synopsis,
                    genres: movie.genre,
                    directors: movie.director,
                    stars: movie.star,
                    hours: 0,
                    minutes: 0
                });
            });
    }, []);

    if (movieInfo.title.length === 0) {
        return <div> Loading... </div>;
    }
    console.log(movieInfo);

    return (
        <div id="singleMovie-page" className="container">
            <h1>{movieInfo.title}</h1>
            <div className="video-trailer">
                <Video />
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
                    <div className="genres">
                        {movieInfo.genres.map(genre => {
                            return (
                                <Link to={`/movie/genre/${genre.genre}`}>
                                    <span className="genre">{genre.genre}</span>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="stars">
                        {movieInfo.stars.map(star => {
                            return (
                                <Link to={`/movie/star/${star.slug}`}>
                                    <span className="star">{star.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="directors">
                        {movieInfo.directors.map(director => {
                            return (
                                <Link to={`/movie/director/${director.slug}`}>
                                    <span className="director">{director.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
