import React, { Component } from "react";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";

class AddRoom extends Component {
  state = {
    name: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newRoom = this.state;

    const { firestore } = this.props;

    firestore
      .add({ collection: "rooms" }, newRoom)
      .then(this.props.handleClose);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handleClose, show } = this.props;

    const showHideClassName = show
      ? "add-room-modal display-block"
      : "add-room-modal display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Add Room</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Room Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
              <button className="btn btn-link text-light" onClick={handleClose}>
                Back to Chat Room
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddRoom.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddRoom);
