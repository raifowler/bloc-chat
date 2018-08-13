import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
<script>
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
</script>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
