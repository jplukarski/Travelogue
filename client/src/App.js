import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar'
import Trips from "./pages/trips/Trips";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Trips} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
