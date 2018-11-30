import React, { Component } from 'react';
import Navbar from './components/navbar';
import Trips from "./components/trips";
import OutlinedTextFields from "./components/tripForm"
import TotalDisplay from './components/totalDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <OutlinedTextFields />
        <TotalDisplay />
        <Trips />
      </div>

    );
  }
}

export default App;
