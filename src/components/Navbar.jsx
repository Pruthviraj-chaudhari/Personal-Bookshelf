import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ query, onSearch }) => {

  const navigate = useNavigate();


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">Bookshelf</div>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for books..."
            value={query}
            onChange={onSearch} 
          />
        </div>
        <button className="btn-my-bookshelf" onClick={() => navigate('/bookshelf')}>My Bookshelf</button>
      </div>
    </nav>
  )
}

export default Navbar