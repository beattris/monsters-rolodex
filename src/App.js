import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Linda" },
        { name: "Franky" },
        { name: "Abigail" },
      ]
    };
  }

  render() {
    return <div className="App">
      {this.state.monsters.map((monster) => {
        return <h1 key={Math.random()}>{monster.name}</h1>
      })}
    </div>;
  }
}

export default App;
