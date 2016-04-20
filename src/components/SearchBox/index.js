import React, { Component } from 'react';

import Suggestion from './Suggestion';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      suggestions: []
    };
  }

  onChange(event) {
    this.setState({value: event.target.value}, () => {
      setTimeout(() => {
        this.setState({
          suggestions: [
            'colonial',
            'pothole'
          ]
        })
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}/>
        {this.state.suggestions.map((suggestion, index) => {
          return <Suggestion key={index} suggestion={suggestion} />
        })}
      </div>
    );
  }
}

// Export dependencies like this:
export default SearchBox;    
