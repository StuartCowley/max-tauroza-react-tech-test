import React, { useState } from 'react';
import '../styles/Search.css';

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => setValue(e.target.value);

  return (
    <>
      <form>
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
