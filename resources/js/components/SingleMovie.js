import React from 'react';
import { Link } from 'react-router-dom';

const SingleMovie = ({ match }) => {
    return (
        <div id="singleMovie-page" className="container">
            <h1>{match.params.id}</h1>
            <div className="video-trailer">
                <img src="https://pbs.twimg.com/media/D4zttWUXsAEGJOa.jpg" />
            </div>
            <div className="video-description">
                <div className="video-img">
                    <div className="video">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" />
                    </div>
                </div>
                <div className="video-summary">
                    <span className="video-title">One Punch-Man: Movie Saitama</span>
                    <span className="video-length">1 hour 23 minutes</span>
                    <span className="video-rating">4/5 Stars</span>
                    <span className="video-synopsis">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
