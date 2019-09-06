/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search Your Video</label>
            <input type="text" placeholder="How to learn React.js ?" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
