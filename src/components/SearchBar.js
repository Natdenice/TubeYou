/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './SearchBar.css';

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
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-term" className="label-title">
              <div className="ui icon input">
                <input
                  className="form-input"
                  id="search-term"
                  value={this.state.term}
                  onChange={this.handleOnChange}
                  type="text"
                  placeholder="Live relax music"
                />
                <i className="circular search link icon" onClick={this.onFormSubmit} />
              </div>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
