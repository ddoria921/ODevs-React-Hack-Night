import React, { Component } from 'react';

import Suggestion from './Suggestion';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value}, () => {
      this.props.onSearch(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}/>
        <br/>
        {this.props.suggestions.map((suggestion, index) => {
          return <Suggestion key={index} suggestion={suggestion} />
        })}
      </div>
    );
  }
}

// Export dependencies like this:
export default SearchBox;    
