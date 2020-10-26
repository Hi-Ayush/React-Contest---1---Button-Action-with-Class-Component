import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  state = {
    text: ""
  };
  handleClick = () => {
    this.setState({
      text:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
    // return this.state.text;
  };
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
