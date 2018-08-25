import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage.js'
import Book from './Book.js'
import SearchPage from './SearchPage.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <SearchPage
        books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp
