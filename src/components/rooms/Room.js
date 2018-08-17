import React, { Component } from "react";

class Room extends Component {
  render() {
    const { roomName, onClickActive, onClickDelete } = this.props;

    return (
      <div className="my-2">
        <a onClick={onClickActive} className="float-left">
          {roomName}
        </a>
        <a onClick={onClickDelete} className="float-right">
          <i className="fas fa-minus-circle fa-lg text-danger" />
        </a>
      </div>
    );
  }
}

export default Room;
