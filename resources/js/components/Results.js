import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Results = ({ results }) => {
    const Results = styled.ul`
        background: white;
        height: 200px;
        position: absolute;
        z-index: 1;
        width: 100%;
        overflow-y: scroll;
        font-size: 1.3rem;
    `;
    const Movie = styled.li`
        padding: 10px 0 0 15px;
        &:hover {
            background: whitesmoke;
        }
    `;
    if (results.length === 0) {
        return <div />;
    }
    return (
        <Results>
            {results.map((result, i) => {
                return (
                    <Movie key={i}>
                        <Link to={`/movie/${result.id}`}>{result.title}</Link>
                    </Movie>
                );
            })}
        </Results>
    );
};
export default Results;
