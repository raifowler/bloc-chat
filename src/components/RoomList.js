import React, { Component } from "react";

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      showModal: false
    };

    this.roomsRef = this.props.firebase.database().ref("rooms");
  }

  componentDidMount() {
    this.roomsRef.on("child_added", snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) });
    });
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <ul className="nav flex-column">
        {this.state.rooms.map(room => (
          <li key={room.key} className="nav-item py-1">
            {room.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default RoomList;
