// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import ExistingComplaint from './components/existingComponent';
import SearchBox from './components/SearchBox';

function createSuggestions(values) {
  if (values.includes('Power line down')) {
    return [];
  } else if (values.includes('Winter Park')) {
    return [
      'Power line down',
      'Power outage'
    ]
  } else if (values.includes('power')) {
    return [
      'Winter Park',
      'Orlando',
      'Maitland'
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
          search: value,
          suggestions: createSuggestions(value)
        })
      }, 1000);
    });
  }

  render() {
    let complaint = null;
    if (this.state.search && this.state.search.includes('Winter Park')) {
      complaint = (
        <ExistingComplaint
          title="Powerline down near Winter Park High"
          description="There seems to be an inactive powerline down near the back of the school. I think it should be removed as soon as possible."
          date="Apr 19th, 2016"
          votes="82"
          location="Winter Park, FL"/>
      );
    }

    return (
      <div>
        What are you complaining about?
      	<SearchBox onSearch={this.onSearch}
          suggestions={this.state.searching ? [] : this.state.suggestions} />
        {complaint}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
