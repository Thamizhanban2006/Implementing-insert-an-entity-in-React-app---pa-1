// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import {useNavigate} from "react-router-dom";
import AddBook from "./AddBook";

const Home = () => {
  const navigate = useNavigate();
  const handlenavigate=()=>{
    navigate('/addbook')
  }

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <button className="button" onClick={handlenavigate}>Add Book</button>
    </div>
  );
};

export default Home;
