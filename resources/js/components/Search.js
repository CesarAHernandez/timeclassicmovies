import React, { useState } from 'react';
import axios from 'axios';
import Result from './Results';
// TODO: put the drop down after the search is done
const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    let _query;
    const handleSearch = e => {
        e.preventDefault();
        const url = `http://localhost/api/movie/search`;
        axios
            .post(url, {
                query: _query.value
            })
            .then(response => {
                const movies = response.data.data;
                setSearchResults(movies);
            });
    };

    return (
        <div className="searchForm-container">
            <form className="search-form" onSubmit={handleSearch} method="post">
                <div className="input-field">
                    {/* <label className="label-icon" htmlFor="search">
                        <i class="material-icons">search</i>
                    </label> */}
                    <input ref={input => (_query = input)} type="search" id="search" placeholder="search for title" />
                    {/* <i class="material-icons">close</i> */}
                    <input type="submit" value="search" />
                </div>
            </form>
            <Result results={searchResults} />
        </div>
    );
};
export default Search;
