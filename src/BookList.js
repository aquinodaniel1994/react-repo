import React from 'react';


const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map(() => {
                    return <BookCard 
                        image={}
                        title={}
                        author={}
                        published={}
                    />
                })
            }
        </div>
    )
}

export default BookList;