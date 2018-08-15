import React, { Component } from "react";

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
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

  render() {
    return (
<<<<<<< HEAD
      <div>
        {this.state.rooms.map(room => (
          <div key={this.state.rooms.key}>{room.name}</div>
        ))}
      </div>
=======
      <ul className="nav flex-column">
        {this.state.rooms.map(room => (
          <li key={this.state.rooms.key} className="nav-item">
            {room.name}
          </li>
        ))}
      </ul>
>>>>>>> room-list
    );
  }
}

export default RoomList;
