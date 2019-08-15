import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getBooks from '../actions';

import TextInput from '../Components/TextInput';
import List from '../Components/List';

import bookSelector from '../selectors/booksList';

class App extends Component {
  state = {
    bookInputValue: '',
    firstTimeSearch: false,
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
    this.setState({ firstTimeSearch: true });
    bookInputValue && fetchBooks(bookInputValue);
  };

  render() {
    const { bookInputValue, firstTimeSearch } = this.state;
    const { books } = this.props;

    let bookList;
    if (books.length > 0) {
      bookList = <List list={books} />;
    } else if (firstTimeSearch) {
      bookList = <p>{`${bookInputValue} Not Found`}</p>;
    } else {
      bookList = <p>No searchs</p>;
    }

    return (
      <div className="flex flex-col items-center">
        <form
          className="p-4 w-full md:w-4/5 lg:w-1/2 flex items-center justify-center"
          onSubmit={this.handleSubmit}
        >
          <TextInput
            value={bookInputValue}
            onChange={this.handleBookInputChange}
            onClear={this.handleClearBookInput}
          />
        </form>
        {bookList}
      </div>
    );
  }
}

App.propTypes = {
  getBooks: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
