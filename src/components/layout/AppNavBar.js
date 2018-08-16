import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddRoom from "../chatrooms/AddRoom";

class AppNavBar extends Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Bloc Chat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <AddRoom show={this.state.show} handleClose={this.hideModal} />
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={this.showModal}
                >
                  Add Room
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavBar;
