import React from 'react';
import { Link } from 'react-router-dom';

const SingleVideo = ({ posterLocation, id, title }) => {
    return (
        <div className="col s2">
            <Link to={`/movie/${id}`}>
                <div className="card hoverable">
                    <div className="card-image">
                        {/* <img src={posterLocation} /> */}
                        <img src="https://picsum.photos/200/300" />
                    </div>
                    <div className="card-content">
                        {/* <div className="card-title">{title}</div> */}
                        <span className="card-title">{title}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleVideo;
