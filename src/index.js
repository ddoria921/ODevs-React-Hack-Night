// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Goat from './components/goat-component';
import ExistingComplaint from './components/existingComplaint';

class App extends React.Component {
  render() {
    return (
      <div>
      	<ExistingComplaint />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
