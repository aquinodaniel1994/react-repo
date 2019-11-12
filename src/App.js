import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox/SearchBox';
import BookCard from './BookCard/BookCard';
import axios from 'axios';

class App extends Component {
  state = {
    books: [],
    searchArea: "ciao"
  }

  searchBook = (bookName) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`).then(response => {
      this.setState({ books: [...response.data.items] }); 
      console.dir(this.state.books)
    }).catch(e => console.error(e));
  }

  changeSearch = (event) => {
    this.setState({searchArea: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <SearchBox btnClick={() => this.searchBook(this.state.searchArea)} searchArea={this.state.searchArea} changeSearch={this.changeSearch} />
        <BookCard books={this.state.books} />
      </div>
    );
  }
}

export default App;
