import React from 'react';

class ChatList extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <strong>Messages:</strong>
        {this.props.messages ? this.props.messages.map((message) => <Message key={message.text} message={message} />) : null}
      </div>
    )
  }
}

export default ChatList;