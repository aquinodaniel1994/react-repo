import React from 'react'

const BookCard = (props) => {
    return(
        <div className="container">
            {props.books.map((book, index) => {
                return (
                    <div>
                        <div className="left">
                            <li key={index}></li>
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} />  
                        </div>
                        <div className="right">
                            <p>{book.volumeInfo.title}</p>
                            <p>{book.volumeInfo.author}</p>
                            <p>{book.volumeInfo.publisher}</p>
                        </div> 
                    </div> 
                )
            })}
        </div>
    )
}

export default BookCard;