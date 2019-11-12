import React from 'react';

const BookCard = (props) => {
    const style = {
        width: "10rem"
    }
    return (
        <div className="container">
            {props.books.map((book, index) => {
                return (
                    <div className="card mb-3" key={index}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="" style={style} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-text">{book.volumeInfo.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookCard; 
