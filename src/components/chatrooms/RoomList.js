import React, { Component } from "react";

class RoomList extends Component {
  render() {
    const rooms = [
      {
        id: "1",
        name: "Room 1"
      },
      {
        id: "2",
        name: "Room 2"
      },
      {
        id: "3",
        name: "Room 3"
      }
    ];

    if (rooms) {
      return (
        <div>
          <div className="row">
            <div className="col">
              <h4 className="text-center">Chat Rooms</h4>
              <ul className="list-group list-group-flush">
                {rooms.map(room => (
                  <li key={room.id} className="list-group-item">
                    {room.name}
                    <i className="fas fa-trash float-right" />
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

export default RoomList;
