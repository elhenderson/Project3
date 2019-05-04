import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
        <div className="App-header">
          <h2>GreenSpace!</h2>
        </div>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
