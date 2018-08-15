import React, { Component } from "react";
import RoomList from "./components/RoomList";

import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAh6ex4AolBTjLnj6tTKxNyghdeJKSMTWI",
  authDomain: "bloc-chat-962f1.firebaseapp.com",
  databaseURL: "https://bloc-chat-962f1.firebaseio.com",
  projectId: "bloc-chat-962f1",
  storageBucket: "bloc-chat-962f1.appspot.com",
  messagingSenderId: "285962152147"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
          <div className="col-sm-3">
            <a href="" className="navbar-brand">
              Bloc Chat
            </a>
            <button className="btn btn- mx-2 my-1">Add Room</button>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-3 col-12 bg-light sidebar pt-2">
              <RoomList firebase={firebase} />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
