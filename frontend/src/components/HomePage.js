import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // In a real application, you would perform a backend API call here.
    // For this example, we're using a static response.
    if (query.trim() === '') {
      setResponse('Please enter a query.');
    } else {
      setResponse(`You searched for: ${query}`);
    }
  };

  return (
    <div className="home-page">
      <header className="nav-bar">
        <h1 className="" id='hometitle'>WIZ-LEARN</h1>
        <div className="nav-links">
        <Link to="/" className="nav-link-log">
            Log Out
          </Link>
        </div>
      </header>
      <div className='nav-link-tools'>
          <Link to="/home" className="nav-link-tools a:first-child">
            Home
          </Link>
          <Link to="/progress" className="">
            Progress
          </Link>
          </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleQueryChange}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <p className="response">{response}</p>
    </div>
  );
}
