import React from 'react'
import "../index.css";

function Card({ book, handleClick, buttonText, bookshelf = [] }) {

    const { title, author_name, first_publish_year, edition_count, publisher, key } = book;

    const isInBookshelf = bookshelf.some(item => item.key === key);

    return (
        <div className='card'>
            <div className="book-info">
                <div className='book-details'>
                    <h4 className='book-title'>{title}</h4>
                    <h4 className='book-author'>~ {author_name ? author_name[0] : 'Unknown Author'}</h4>
                </div>
                <div className="description">
                    <p><strong>First Published:</strong> {first_publish_year}</p>
                    <p><strong>Publisher:</strong> {publisher ? publisher[0] : 'N/A'}</p>
                    <p><strong>Edition Count:</strong> {edition_count ? edition_count : 'N/A'}</p>
                </div>
            </div>

            {
                (!isInBookshelf) && (
                    <button className={(buttonText === "Add to Bookshelf") ? 'btn-add-bookshelf' : 'btn-red'} onClick={() => handleClick(book)}>
                        {buttonText}
                    </button>
                )
            }

            {(buttonText === "Add to Bookshelf" && isInBookshelf) && (
                <span className='added-to-bookshelf'>Added to bookshelf</span>
            )}

        </div>
    )
}

export default Card