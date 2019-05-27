import React from 'react';

const Pagination = ({ currentPage, movies, setPage }) => {
    return (
        <div className="pagination">
            {currentPage !== 0 ? (
                <div className="number" value={0} onClick={setPage}>
                    first
                </div>
            ) : (
                ''
            )}
            {currentPage > 1 ? (
                <div className="number" value={currentPage - 2} onClick={setPage}>
                    {currentPage - 1}
                </div>
            ) : (
                ''
            )}
            {currentPage > 0 ? (
                <div className="number" value={currentPage - 1} onClick={setPage}>
                    {currentPage}
                </div>
            ) : (
                ''
            )}
            <div className="number currentPage" value={currentPage}>
                {currentPage + 1}
            </div>
            {currentPage < Math.ceil(movies.length / 30) - 1 ? (
                <div className="number" value={currentPage + 1} onClick={setPage}>
                    {currentPage + 2}
                </div>
            ) : (
                ''
            )}
            {currentPage < Math.ceil(movies.length / 30) - 2 ? (
                <div className="number" value={currentPage + 2} onClick={setPage}>
                    {currentPage + 3}
                </div>
            ) : (
                ''
            )}
            {currentPage < Math.ceil(movies.length / 30) - 1 ? (
                <div className="number" value={Math.ceil(movies.length / 30) - 1} onClick={setPage}>
                    last
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Pagination;
