/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SearchBar extends React.Component {
  state={
    term: ""
  }

  onSubmit = e => {
    e.preventDefault();
  }

  handleOnChange = (e) => {
    this.setState({term: e.target.value})
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Search Your Video</label>
            <input value={this.state.term} onChange={this.handleOnChange} type="text" placeholder="How to learn React ?" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
