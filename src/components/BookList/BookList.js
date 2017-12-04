import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../containers/Book';

const BookList = ({ books }) => {
    return (
        <div>
            <h3>Books</h3>
            <ul className="book-list">
              {books.map(book => (
                  <li key={book.id} className="book-list__item">
                    <Book {...book} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

BookList.propTypes = {
    books: PropTypes.array,
}

export default BookList;
