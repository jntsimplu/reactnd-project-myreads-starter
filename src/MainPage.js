import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

const Shelf = ({ title, books, updateShelf, shelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books
          .filter(book => book.shelf === shelf)
          .map(book => (
            <li key={book.id} >
              <Book
                book={book}
                updateShelf={updateShelf}
                currentShelf={book.shelf}
              />
            </li>
        ))}
      </ol>
    </div>
  </div>
)

class MainPage extends Component {
render() {
  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              title={'Currently Reading'}
              books={this.props.books}
              updateShelf={this.props.updateShelf}
              shelf={'currentlyReading'}
            />
            <Shelf
              title={'Want to Read'}
              books={this.props.books}
              updateShelf={this.props.updateShelf}
              shelf={'wantToRead'}
            />
            <Shelf
              title={'Read'}
              books={this.props.books}
              updateShelf={this.props.updateShelf}
              shelf={'read'}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainPage
