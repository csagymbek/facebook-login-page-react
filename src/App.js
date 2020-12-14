import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Facebook from "./components/Facebook";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Facebook Auth App</h1>
        </header>
        <p>To get started, authenticate with Facebook</p>
        <Facebook />
      </div>
    );
  }
}
