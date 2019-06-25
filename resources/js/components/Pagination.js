import React from 'react';

const Pagination = ({ currentPage, movies, setPage }) => {
    return (
        <ul className="pagination">
            {currentPage !== 0 ? (
                <li className="waves-effect">
                    <a href="#!" value={0} onClick={setPage}>
                        first
                    </a>
                </li>
            ) : (
                ''
            )}
            {currentPage > 1 ? (
                <li className="waves-effect">
                    <a href="#!" value={currentPage - 2} onClick={setPage}>
                        {currentPage - 1}
                    </a>
                </li>
            ) : (
                ''
            )}
            {currentPage > 0 ? (
                <li className="waves-effect">
                    <a href="#!" value={currentPage - 1} onClick={setPage}>
                        {currentPage}
                    </a>
                </li>
            ) : (
                ''
            )}
            <li className="waves-effect active">
                <a href="#!" value={currentPage} onClick={setPage}>
                    {currentPage + 1}
                </a>
            </li>
            {currentPage < Math.ceil(movies.length / 30) - 1 ? (
                <li className="waves-effect">
                    <a href="#!" value={currentPage + 1} onClick={setPage}>
                        {currentPage + 2}
                    </a>
                </li>
            ) : (
                ''
            )}
            {currentPage < Math.ceil(movies.length / 30) - 2 ? (
                <li className="waves-effect">
                    <a href="#!" value={currentPage + 2} onClick={setPage}>
                        {currentPage + 3}
                    </a>
                </li>
            ) : (
                ''
            )}
            {currentPage < Math.ceil(movies.length / 30) - 1 ? (
                <li className="waves-effect">
                    <a href="#!" value={Math.ceil(movies.length / 30) - 1} onClick={setPage}>
                        last
                    </a>
                </li>
            ) : (
                ''
            )}
        </ul>
    );
};

export default Pagination;
