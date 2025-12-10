import React, { Component } from "react";

import Number from "./Number";
import Navbar from "./Navbar";
import Slider from "./Slider";

import linearSearch from "./linearSearch";
import binarySearch from "./binarySearch";

import "./Searching.css";
import { isInteger } from "lodash";

class Searching extends Component {
  state = {
    array: [],
    steps: [],
    color: [],
    colorSteps: [],
    delay: 500,
    count: 10,
    currentStep: 0,
    found: false,
    key: 0,
    range: [0, 100],
    algorithm: 0,
    isVisualizing: false,
  };

  ALGORITHMS = [linearSearch, binarySearch];

  componentDidMount() {
    this.generateArray();
  }

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  clearColorKey = () => {
    const blankKey = new Array(this.state.count).fill(0);
    this.setState({ color: blankKey, colorSteps: [blankKey] });
  };

  changeAlgorithm = async (val) => {
    // val comes as number from SimpleSelect now
    await this.setState({
      algorithm: parseInt(val, 10),
      steps: [this.state.array],
    });
    this.generateSteps();
  };

  generateArray = () => {
    const arr = [];
    for (let i = 0; i < this.state.count; i++) {
      arr.push(
        this.generateRandomNumber(this.state.range[0], this.state.range[1])
      );
    }
    arr.sort((a, b) => a - b);
    this.setState(
      {
        array: arr,
        steps: [arr],
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  generateSteps = async () => {
    await this.clearColorKey();
    const k = this.state.key;
    const array = this.state.array.slice();
    const steps = this.state.steps.slice();
    const colorSteps = this.state.colorSteps.slice();

    if (isInteger(k)) {
      this.ALGORITHMS[this.state.algorithm](array, steps, k, colorSteps);
    }

    this.setState({
      steps,
      colorSteps,
    });
  };

  setArray = (val, index) => {
    const arr = [...this.state.array];
    arr[index] = val;
    arr.sort((a, b) => a - b);
    this.setState({
      array: arr,
      steps: [arr],
      currentStep: 0,
    });
  };

  startSearch = async () => {
    const steps = this.state.steps.slice();
    const colorSteps = this.state.colorSteps.slice();

    for (let i = 0; i < steps.length; i++) {
      this.setState((prev) => ({
        array: steps[i],
        color: colorSteps[i],
        currentStep: prev.currentStep + 1,
      }));
      await sleep(this.state.delay);
    }
  };

  reset = async () => {
    this.clearColorKey();
    const arr = this.state.array;
    await this.setState(
      {
        array: arr,
        steps: [arr],
      },
      () => this.generateSteps()
    );
  };

  setCount = async (count) => {
    await this.setState({ count }, () => this.generateArray());
  };

  setSpeed = async (speed) => {
    await this.setState({ delay: speed });
  };

  setKey = async (e) => {
    this.clearColorKey();
    let key = e.target.value;
    const arr = this.state.array;
    if (isInteger(parseInt(key, 10))) {
      key = parseInt(key, 10);
    } else {
      key = null;
    }
    await this.setState({ key, array: arr, steps: [arr] }, () => {
      this.generateSteps();
    });
  };

  setFound = () => {
    this.setState({ found: true });
  };

  render() {
    return (
      <div className="searching min-h-screen bg-[#121419] text-white pt-24">
        <Navbar
          startSearch={this.startSearch}
          reset={this.reset}
          randomize={this.generateArray}
          changeAlgorithm={this.changeAlgorithm}
        />

        <div className="flex flex-col items-center mt-16">
          {/* Key input */}
          <div className="mb-8">
            <label className="block text-sm text-slate-300 mb-1">
              Key to search
            </label>
            <input
              type="number"
              onChange={this.setKey}
              className="key-input px-4 py-2 rounded-md bg-slate-900/70 border border-slate-600 text-white 
                         focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter key"
            />
          </div>

          {/* Numbers */}
          <div className="numbers-container">
            {this.state.array.map((value, index) => (
              <Number
                value={value}
                index={index}
                setArray={this.setArray}
                color={this.state.color[index]}
                key={index}
              />
            ))}
          </div>

          {/* Sliders */}
          <div className="mt-8 flex flex-wrap gap-6 justify-center items-center">
            <Slider type="Count" handleChange={this.setCount} />
            <Slider type="Speed" handleChange={this.setSpeed} />
          </div>
        </div>
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Searching;
