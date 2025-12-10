import React, { Component } from "react";
import Navbar from "./Navbar";
import "./stack.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Stack extends Component {
  state = {
    stack: [],
  };

  push = (value) => {
    this.setState((prev) => {
      const temp = [...prev.stack];
      if (!temp.includes(value)) {
        temp.splice(0, 0, value);
      }
      return { stack: temp };
    });
  };

  pop = () => {
    this.setState((prev) => {
      const temp = [...prev.stack];
      temp.shift();
      return { stack: temp };
    });
  };

  popAll = async () => {
    while (this.state.stack.length > 0) {
      await sleep(500);
      this.setState((prev) => {
        const temp = [...prev.stack];
        temp.shift();
        return { stack: temp };
      });
    }
  };

  render() {
    return (
      <>
        <Navbar push={this.push} pop={this.pop} popAll={this.popAll} />

        <div className="stack-page">
          <ul className="stack pt-24 flex justify-center items-center mx-180">
            {this.state.stack.length > 0 ? (
              this.state.stack.map((item, index) =>
                index === 0 ? (
                  <li className="element top" key={index}>
                    {item} <div className="arrow">↵</div>
                  </li>
                ) : (
                  <li className="element" key={index}>
                    {item}
                  </li>
                )
              )
            ) : (
              <div className="empty">Empty Stack</div>
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default Stack;
