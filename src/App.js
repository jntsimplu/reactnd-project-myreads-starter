import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage.js'
import SearchPage from './SearchPage.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books, mybooks: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />

        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
