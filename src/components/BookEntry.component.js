import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookEntry = (props) => {
    const book = props.book;
// To-do: Import book images
    return(
        <div className="entry-container">
            <div className="desc">
                <h2 className="display-3 text-center">
                    <Link className="link-light" to={`/view/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3 className="display-3 text-center">{ book.year }</h3>
                <p>{ book.description }</p>
            </div>
        </div>
    )
};

export default BookEntry;