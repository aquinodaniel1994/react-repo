import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import BookCard from './BookCard/BookCard';

class App extends Component{
  state = {
    searchBar : "test",
    books: [],
  }

  searchBook = (bookName) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`).then(response => {
      this.setState({ books: [...response.data.items] }); 
      console.dir(this.state.books)
    }).catch(e => console.error(e));
  }

  changeSearchContent = (e) => {
    this.setState({searchBar: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchBar = {this.state.searchBar} 
          btnClick={()=> {this.searchBook(this.state.searchBar)}} 
          changeSearchContent =  {this.changeSearchContent} 
        />
        <BookCard books = {this.state.books} />
      </div>
    );
  }
}

export default App;
