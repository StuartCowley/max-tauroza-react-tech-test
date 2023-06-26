import React from 'react';
import '../styles/Search-results.css';

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="invalid-search">Enter a valid search term</p>;
  } else {
    return (
      <>
        <h2>Search results</h2>
        <div className="search-result-wrapper">
          {results.map((result) => (
            <img
              className="card-image"
              src={result}
              alt="searchResultSpaceImage"
              key={result.slice(-20)}
            />
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;
