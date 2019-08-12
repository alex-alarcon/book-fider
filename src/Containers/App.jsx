import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getBooks from '../actions';

import TextInput from '../Components/TextInput';

import bookSelector from '../selectors/booksList';

class App extends Component {
  state = {
    bookInputValue: '',
  };

  handleBookInputChange = event => {
    this.setState({ bookInputValue: event.target.value });
  };

  handleClearBookInput = event => {
    this.setState({ bookInputValue: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { bookInputValue } = this.state;
    const { getBooks: fetchBooks } = this.props;
    fetchBooks(bookInputValue);
  };

  render() {
    const { bookInputValue } = this.state;

    return (
      <form
        className="p-4 w-full flex items-center justify-center"
        onSubmit={this.handleSubmit}
      >
        <TextInput
          value={bookInputValue}
          onChange={this.handleBookInputChange}
          onClear={this.handleClearBookInput}
        />
      </form>
    );
  }
}

App.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: bookSelector(state),
    error: state.books.error,
    isFetching: state.books.isFetching,
  };
}

export default connect(
  mapStateToProps,
  { getBooks },
)(App);
