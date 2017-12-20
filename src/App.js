import React, { Component } from "react";
import { TodoListContainer } from "./TodoList";
import logo from "./logo.svg";
import "./App.css";
import "./GithubRibbon.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <center className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">React TODO List</h3>
        </center>
        <div className="list-container">
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default App;
