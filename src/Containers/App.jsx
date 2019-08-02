import React, { Component } from 'react';

import TextInput from '../Components/TextInput';

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

  render() {
    const { bookInputValue } = this.state;
    return (
      <div className="p-4 w-full flex items-center justify-center">
        <TextInput
          value={bookInputValue}
          onChange={this.handleBookInputChange}
          onClear={this.handleClearBookInput}
        />
      </div>
    );
  }
}

export default App;
