import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SingleVideo = ({ posterLocation, id, title }) => {
    const CardTitle = styled.span`
        font-size: 1.4rem !important;
    `;
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
                        <CardTitle className="card-title">{title}</CardTitle>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleVideo;
