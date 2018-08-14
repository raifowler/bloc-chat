import React, { Component } from "react";
import RoomList from "./components/RoomList";
import "./App.css";

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
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
