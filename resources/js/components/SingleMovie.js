import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Video from '../components/Video';

const SingleMovie = ({ match }) => {
    const MovieInfo = styled.div`
        padding-bottom: 15px;
        padding-top: 10px;
        grid-row-gap: 15px;
        > a {
            padding-right: 10px;
        }
    `;
    const MovieInfoItem = styled.span`
        padding: 4px 13px;
        background: white;
        border-radius: 15px;
        -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.75);
    `;
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        poster_location: '',
        synopsis: '',
        genres: [],
        hours: 0,
        minutes: 0
    });
    useEffect(() => {
        const url = `/api/movie/${match.params.id}`;
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
                        <div className="title">Genres:</div>
                        <MovieInfo className="values">
                            {movieInfo.genres.map(genre => {
                                return (
                                    <Link to={`/movie/genre/${genre.genre}`}>
                                        <MovieInfoItem className="genre">{genre.genre}</MovieInfoItem>
                                    </Link>
                                );
                            })}
                        </MovieInfo>
                    </div>
                    <div className="stars">
                        <div className="title">Stars:</div>
                        <MovieInfo className="values">
                            {movieInfo.stars.map(star => {
                                return (
                                    <Link to={`/movie/star/${star.slug}`}>
                                        <MovieInfoItem className="star">{star.name}</MovieInfoItem>
                                    </Link>
                                );
                            })}
                        </MovieInfo>
                    </div>
                    <div className="directors">
                        <div className="title">Directors:</div>
                        <MovieInfo className="values">
                            {movieInfo.directors.map(director => {
                                return (
                                    <Link to={`/movie/director/${director.slug}`}>
                                        <MovieInfoItem className="director">{director.name}</MovieInfoItem>
                                    </Link>
                                );
                            })}
                        </MovieInfo>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
