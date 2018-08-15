import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class RoomList extends Component {
  render() {
    const { rooms } = this.props;

    if (rooms) {
      return (
        <div>
          <div className="row">
            <div className="col">
              <h4 className="text-center">Chat Rooms</h4>
              <ul className="list-group list-group-flush">
                {rooms.map(room => (
                  <li key={room.id} className="list-group-item">
                    <Link to={`/room/${room.id}`}>{room.name}</Link>
                    <Link to={`/room/${room.id}`} style={{ color: "red" }}>
                      <i className="fas fa-trash float-right" />
                    </Link>
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
  connect((state, props) => ({
    rooms: state.firestore.ordered.rooms
  }))
)(RoomList);
