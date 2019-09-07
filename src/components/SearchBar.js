/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onSubmit = e => {
    e.preventDefault();
  };

  handleOnChange = e => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-term">
              Search Your Video
              <input
                id="search-term"
                value={this.state.term}
                onChange={this.handleOnChange}
                type="text"
                placeholder="How to learn React ?"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
