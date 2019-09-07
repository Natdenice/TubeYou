/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

const KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends React.Component {
  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
