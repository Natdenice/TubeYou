/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  handleOnChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-term">
              Search Your Video
              <input
                id="search-term"
                value={this.state.term}
                onChange={this.handleOnChange}
                type="text"
                placeholder="Live relax music"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
