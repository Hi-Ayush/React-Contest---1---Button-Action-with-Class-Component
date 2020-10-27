import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderPara: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isRenderPara: true });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          Click Me
        </button>
        {this.state.isRenderPara ? (
          <p>
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}
export default App;
