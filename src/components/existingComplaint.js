// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';
import './existingComplaint.scss';

class existingComplaint extends React.Component {
  render() {
    return (
      <div className='existingComplaint'>
        <div className='complaintVotes'><span className='voteEmoji'>😠</span> 7<div className='voteText'>Upvotes</div></div>
        <div className='complaintTitle'><strong>title of message{this.props.title}</strong></div>
        <div className='complaintBody'>body of message{this.props.body}</div>
        <div className='complaintInfo'>Apr 19th, 2016 - Winter Park, FL</div>
      </div>
    );
  }
}

export default existingComplaint;
