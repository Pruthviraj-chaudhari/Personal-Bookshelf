import Card from "../components/Card";
import "../index.css";
import { useEffect, useState } from "react";

function BookSearch({initialBooks = [], initialQuery, onAddToBookshelf, message, bookshelf}) {

    if (initialBooks.length === 0) {
        return (
          <div className="refresh">
            {
                message === "Loading..." ? <div class="custom-loader"></div> : <h2>{message}</h2>
            }
          </div>
        )
    }
      
    return (
        <div className="container">
            <div className="cards-container">
                {
                    initialBooks.map((book) => (
                        <Card key={book.key} book={book} handleClick={onAddToBookshelf} buttonText={"Add to Bookshelf"} bookshelf={bookshelf} />
                    ))
                }
            </div>
        </div>
    )
}

export default BookSearch;