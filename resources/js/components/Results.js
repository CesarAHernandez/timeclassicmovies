import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ results }) => {
    if (results.length === 0) {
        return <div />;
    }
    return (
        <ul className="search-result-container">
            {results.map((result, i) => {
                return (
                    <li key={i}>
                        <Link to={`/movie/${result.id}`}>{result.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
export default Results;
