import React, { Component } from "react";
import Navbar from "./Navbar";

import "./queue.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Queue extends Component {
  state = {
    queue: [],
  };

  enqueue = (value) => {
    this.setState((prev) => {

      const temp = [...prev.queue];
      if (!temp.includes(value)) {
        temp.push(value);
      } else {
        console.log("already exists");
      }
      return { queue: temp };
    });
  };

  dequeue = () => {
    this.setState((prev) => {
      const temp = [...prev.queue];
      temp.shift();
      return { queue: temp };
    });
  };

  dequeueAll = async () => {
    while (this.state.queue.length > 0) {
      await sleep(500);
      this.setState((prev) => {
        const temp = [...prev.queue];
        temp.shift();
        return { queue: temp };
      });
    }
  };

  render() {
    return (
      <>
        <Navbar
          enqueue={this.enqueue}
          dequeue={this.dequeue}
          dequeueAll={this.dequeueAll}
        />

        {/* main area under navbar */}
        <div className="queue-page">
          <ul className="queue pt-24 flex justify-center items-center mx-180">
            {this.state.queue.length > 0 ? (
              this.state.queue.map((item, index) => (
                <li className="element" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <div className="empty">Empty Queue</div>
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default Queue;
