import React, { useState } from 'react';
import { searchNaver } from '../api/naverSearch';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const items = await searchNaver(query);
      setResults(items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <p dangerouslySetInnerHTML={{ __html: item.title }} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;