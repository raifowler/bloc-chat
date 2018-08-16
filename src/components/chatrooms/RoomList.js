import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class RoomList extends Component {
  render() {
    const { firestore, rooms } = this.props;

    if (rooms) {
      return (
        <div>
          <div className="row">
            <div className="col">
              <h4 className="text-center">Chat Rooms</h4>
              <ul className="list-group list-group-flush">
                {rooms.map(room => (
                  <li key={room.id} className="list-group-item">
                    <button className="btn btn-link mx-0 px-0">
                      {room.name}
                    </button>
                    <button
                      onClick={() => {
                        firestore.delete({ collection: "rooms", doc: room.id });
                      }}
                      className=" btn btn-danger float-right"
                    >
                      <i className="fas fa-trash" />
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
