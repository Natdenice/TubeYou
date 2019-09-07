/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: ''
  };

  componentDidMount() {
    this.onSearchSubmit('Live relax music');
  }

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[2] });
  };

  onSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <h1 className="app-title">TubeYou</h1>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div className="ui stackable two column grid">
            <div className="row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
