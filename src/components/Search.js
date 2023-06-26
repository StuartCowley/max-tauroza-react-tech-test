import React, { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="searchBar"
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <button className="searchButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Search;
