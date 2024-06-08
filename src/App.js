import React, { useState, useEffect } from "react";
import BookSearch from "./pages/BookSearch";
import "./index.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Bookshelf from "./pages/Bookshelf";
import useDebounce from "./hooks/useDebounce";  // Import the debounce hook

const App = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("Search a Book");
  const [query, setQuery] = useState('');
  const [bookshelf, setBookshelf] = useState(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    return storedBooks;
  });

  const debouncedQuery = useDebounce(query, 600);  // Use the debounce hook with a delay of 300ms

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setMessage("Loading...");
      if (debouncedQuery.length > 2) {
        try {
          const response = await axios.get(`https://openlibrary.org/search.json?q=${debouncedQuery}&limit=10&page=1`);
          setBooks(response.data.docs);
          console.log(response.data.docs);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      } else {
        setBooks([]);
      }
      setMessage("Search a Book");
    };

    fetchBooks();
  }, [debouncedQuery]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} query={query} />
      <Routes>
        <Route path="/" element={<BookSearch initialBooks={books} onAddToBookshelf={addToBookshelf} message={message} />} />
        <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />} />
      </Routes>
    </div>
  );
};

export default App;
