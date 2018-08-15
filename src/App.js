import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/Dashboard";

// Bootstrap //
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Custom CSS //
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>

      // <div className="App">
      //   <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      //     <div className="col-sm-3">
      //       <a href="" className="navbar-brand">
      //         Bloc Chat
      //       </a>
      //       <button className="btn btn- mx-2 my-1">Add Room</button>
      //     </div>
      //   </nav>
      //   <div className="container-fluid">
      //     <div className="row">
      //       <nav className="col-sm-3 col-12 bg-light sidebar pt-2">
      //         <RoomList firebase={firebase} />
      //       </nav>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
