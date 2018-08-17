import React, { Component } from "react";

class NewRoom extends Component {
  render() {
    const { handleSubmit, handleChange } = this.props;

    return (
      <form onSubmit={handleSubmit} className="mb-1">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="newRoomName"
            placeholder="Room name"
            onChange={handleChange}
          />
          <div className="input-group-append">
            <input
              type="submit"
              value="Add Room"
              className="btn btn-outline-success"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default NewRoom;
