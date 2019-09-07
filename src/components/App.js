/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
  state = {
    videos: []
  };

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetails />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
