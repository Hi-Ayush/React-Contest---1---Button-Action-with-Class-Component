import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleClick = function () {
      const text =
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
      return text;
    };
    return (
      <div id="main">
        <button id="click" onClick={handleClick}>
          Click Me
        </button>
        {this.text}
        {/* Do not remove this main div!! */}
      </div>
    );
  }
}

export default App;
