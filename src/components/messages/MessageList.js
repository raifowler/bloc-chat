import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class MessageList extends Component {
  render() {
    const { rooms, messages } = this.props;

    if ((rooms, messages)) {
      return (
        <div>
          <div className="row">
            <div className="col">
              <h4 className="text-center">{this.props.roomName}</h4>
              <ul className="list-group list-group-flush">
                {messages.map(message => (
                  <li key={message.id} className="list-group-item">
                    <button className="btn btn-link mx-0 px-0">
                      {message.content}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

MessageList.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{ collection: "messages" }]),
  connect(state => ({
    messages: state.firestore.ordered.messages,
    rooms: state.firestore.ordered.rooms
  }))
)(MessageList);
