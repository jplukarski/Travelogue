import React, { Component } from 'react';
import Navbar from './components/navbar';
import Trips from "./components/trips";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Trips />
      </div>

    );
  }
}

export default App;
