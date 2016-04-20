// Import NPM dependencies like this:
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './existingComplaint.scss';

class existingComplaint extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.props.votes = 0;
  }

  onClick(event) {
    alert('hi');
    this.props.votes = this.props.votes + 1;
  };

  render() {
    return (
      <div className='existingComplaint'>
        <div onClick={() => this.onClick()} className='complaintVotes'><span className='voteEmoji'>😠</span> {this.props.votes}<div className='voteText'>Upvotes</div></div>
        <div className='complaintTitle'><strong>title of message{this.props.title}</strong></div>
        <div className='complaintBody'>body of message{this.props.body}</div>
        <div className='complaintInfo'>Apr 19th, 2016 - Winter Park, FL</div>
      </div>
    );
  }
}

export default existingComplaint;
