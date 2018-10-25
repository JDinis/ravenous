import React, { Component } from 'react';
import BusinessList from '../../components/businesslist/businesslist';
import SearchBar from '../../components/searchbar/searchbar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}
