import React, { Component } from "react";
import Room from "./Room";
import NewRoom from "./NewRoom";

import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class RoomList extends Component {
  state = {
    activeRoom: null,
    showNewRoom: false,
    newRoomName: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const newRoom = {
      name: this.state.newRoomName
    };

    const { firestore } = this.props;

    firestore
      .add({ collection: "rooms" }, newRoom)
      .then(this.setState({ showNewRoom: false }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { rooms, firestore } = this.props;
    const { showNewRoom } = this.state;

    let newRoomForm = "";
    // If new room form should display
    if (showNewRoom) {
      newRoomForm = (
        <NewRoom
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    } else {
      newRoomForm = null;
    }

    if (rooms) {
      return (
        <div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <h4>
                  <span>Chat Rooms</span>
                  <span>
                    <a
                      href="#!"
                      onClick={() =>
                        this.setState({
                          showNewRoom: !this.state.showNewRoom
                        })
                      }
                      className="float-right"
                    >
                      <i className="fas fa-plus" />
                    </a>
                  </span>
                </h4>
                {newRoomForm}
              </div>
              <ul className="list-group list-group-flush">
                {rooms.map(room => (
                  <Room
                    key={room.id}
                    roomName={room.name}
                    onClickDelete={() => {
                      const id = room.id;
                      firestore.delete({ collection: "rooms", doc: id });
                    }}
                    onClickActive={() => {
                      const id = room.id;
                      this.setState({ activeRoom: id });
                    }}
                  />
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

RoomList.propTypes = {
  firestore: PropTypes.object.isRequired,
  rooms: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "rooms" }]),
  connect(state => ({
    rooms: state.firestore.ordered.rooms
  }))
)(RoomList);
