// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Goat from './components/goat-component';
import ExistingComplaint from './components/existingComplaint';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    setTimeout(() => {
      this.setState({
        suggestions: [
          'colonial',
          'pothole'
        ]
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        What are you complaining about?
      	<SearchBox onSearch={this.onSearch} suggestions={this.state.suggestions} />
        <ExistingComplaint />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
