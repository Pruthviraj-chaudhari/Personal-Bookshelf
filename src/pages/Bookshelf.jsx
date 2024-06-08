import React from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

const Bookshelf = ({bookshelf, onRemoveFromBookshelf}) => {

  const navigate = useNavigate();

  if (bookshelf.length === 0) {
    return (
      <div className="refresh">
       <h2>No books added</h2>
       <button className="btn-white" onClick={()=> navigate('/')}>Add books</button>
      </div>
    )
}

  return (
    <div className="container">
            <div className="cards-container">
                {
                  bookshelf.map((book) => (
                        <Card key={book.key} book={book} handleClick={()=> onRemoveFromBookshelf(book.key)} buttonText={"Remove"} />
                    ))
                }
            </div>
        </div>
  )
}

export default Bookshelf