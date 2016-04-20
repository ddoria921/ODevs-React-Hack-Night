// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import ExistingComplaint from './components/existingComponent';
import SearchBox from './components/SearchBox';

function createSuggestions(values) {
  if (values.includes('colonial')) {
    return [
      'pothole',
      'traffic'
    ]
  } else if (values.includes('road')) {
    return [
      'colonial',
      'university'
    ];
  }

  return [];
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    this.setState({
      searching: true
    },
      () => {
      setTimeout(() => {
        this.setState({
          searching: false,
          suggestions: createSuggestions(value)
        })
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        What are you complaining about?
      	<SearchBox onSearch={this.onSearch}
          suggestions={this.state.searching ? [] : this.state.suggestions} />
        <ExistingComplaint
          title="Powerline down near Winter Park High"
          description="There seems to be an inactive powerline down near the back of the school. I think it should be removed as soon as possible."
          date="Apr 19th, 2016"
          votes="82"
          location="Winter Park, FL"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
