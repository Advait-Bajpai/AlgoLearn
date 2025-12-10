import React, { Component } from "react";

import Bars from "./Bars";
import Bars2 from "./Bars2";
import Navbar from "./Navbar";
import ControlPannel from "./ControlPannel";
import Tooltip from "./Tooltip";

import BubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";

import "./Sorting.css";

export default class Sorting extends Component {
  state = {
    array1: [],
    arraySteps1: [],
    colorKey1: [],
    colorSteps1: [],
    currentStep1: 0,

    array2: [],
    arraySteps2: [],
    colorKey2: [],
    colorSteps2: [],
    currentStep2: 0,

    barCount: 10,
    delay: 500,
    algorithm1: 0,
    algorithm2: 0,
    comparisonMode: false,
  };

  ALGORITHMS = [BubbleSort, SelectionSort, InsertionSort, MergeSort, QuickSort];

  componentDidMount() {
    this.generateBars();
  }

  clearColorKey = () => {
    const blankKey = new Array(this.state.barCount).fill(0);
    this.setState({ colorKey1: blankKey, colorSteps1: [blankKey] });
  };

  clearColorKey2 = () => {
    const blankKey = new Array(this.state.barCount).fill(0);
    if (this.state.comparisonMode) {
      this.setState({ colorKey2: blankKey, colorSteps2: [blankKey] });
    }
  };

  previousStep1 = () => {
    const s = this.state.currentStep1 - 1;
    if (s >= 0) {
      this.setState({
        currentStep1: s,
        array1: this.state.arraySteps1[s],
        colorKey1: this.state.colorSteps1[s],
      });
    }
  };

  nextStep1 = () => {
    const s = this.state.currentStep1 + 1;
    if (s < this.state.arraySteps1.length) {
      this.setState({
        currentStep1: s,
        array1: this.state.arraySteps1[s],
        colorKey1: this.state.colorSteps1[s],
      });
    }
  };

  previousStep2 = () => {
    const s = this.state.currentStep2 - 1;
    if (s >= 0) {
      this.setState({
        currentStep2: s,
        array2: this.state.arraySteps2[s],
        colorKey2: this.state.colorSteps2[s],
      });
    }
  };

  nextStep2 = () => {
    const s = this.state.currentStep2 + 1;
    if (s < this.state.arraySteps2.length) {
      this.setState({
        currentStep2: s,
        array2: this.state.arraySteps2[s],
        colorKey2: this.state.colorSteps2[s],
      });
    }
  };

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  reset = async () => {
    await this.clearColorKey();
    await this.setState({
      array1: this.state.array1,
      arraySteps1: [this.state.array1],
      currentStep1: 0,
    });
    this.generateSteps();

    if (this.state.comparisonMode) {
      await this.clearColorKey2();
      await this.setState({
        array2: this.state.array2,
        arraySteps2: [this.state.array2],
        currentStep2: 0,
      });
      this.generateSteps2();
    }
  };

  generateBars = () => {
    this.clearColorKey();

    const arr = [];
    for (let i = 0; i < this.state.barCount; i++) {
      arr.push(this.generateRandomNumber(50, 200));
    }

    this.setState(
      {
        array1: arr,
        arraySteps1: [arr],
        currentStep1: 0,
      },
      () => this.generateSteps()
    );

    if (this.state.comparisonMode) {
      this.clearColorKey2();
      this.setState(
        {
          array2: arr,
          arraySteps2: [arr],
          currentStep2: 0,
        },
        () => this.generateSteps2()
      );
    }
  };

  Start = () => {
    this.Start1();
    if (this.state.comparisonMode) this.Start2();
  };

  Start1 = async () => {
    const steps = this.state.arraySteps1;
    const colors = this.state.colorSteps1;

    for (let i = 0; i < steps.length; i++) {
      const s = this.state.currentStep1;

      this.setState({
        array1: steps[s],
        colorKey1: colors[s],
        currentStep1: s + 1,
      });

      await sleep(this.state.delay);
    }
  };

  Start2 = async () => {
    const steps = this.state.arraySteps2;
    const colors = this.state.colorSteps2;

    for (let i = 0; i < steps.length; i++) {
      const s = this.state.currentStep2;

      this.setState({
        array2: steps[s],
        colorKey2: colors[s],
        currentStep2: s + 1,
      });

      await sleep(this.state.delay);
    }
  };

  generateSteps = () => {
    const arr = this.state.array1.slice();
    const steps = this.state.arraySteps1.slice();
    const colorSteps = this.state.colorSteps1.slice();

    this.ALGORITHMS[this.state.algorithm1](arr, 0, steps, colorSteps);

    this.setState({
      arraySteps1: steps,
      colorSteps1: colorSteps,
    });
  };

  generateSteps2 = () => {
    const arr = this.state.array2.slice();
    const steps = this.state.arraySteps2.slice();
    const colorSteps = this.state.colorSteps2.slice();

    this.ALGORITHMS[this.state.algorithm2](arr, 0, steps, colorSteps);

    this.setState({
      arraySteps2: steps,
      colorSteps2: colorSteps,
    });
  };

  // Navbar calls this like: handleChangeAlgorithm(value, pos)
  handleChangeAlgorithm = (value, pos) => {
    if (pos === 0) {
      this.clearColorKey();
      this.setState(
        {
          algorithm1: value,
          currentStep1: 0,
          arraySteps1: [this.state.arraySteps1[0]],
        },
        () => this.generateSteps()
      );
    } else if (this.state.comparisonMode && pos === 1) {
      this.clearColorKey2();
      this.setState(
        {
          algorithm2: value,
          currentStep2: 0,
          arraySteps2: [this.state.arraySteps2[0]],
        },
        () => this.generateSteps2()
      );
    }
  };

  changeArray = (index, value) => {
    const arr = [...this.state.array1];
    arr[index] = value;

    this.setState(
      {
        array1: arr,
        arraySteps1: [arr],
        currentStep1: 0,
      },
      () => this.generateSteps()
    );

    if (this.state.comparisonMode) {
      this.setState(
        {
          array2: arr,
          arraySteps2: [arr],
          currentStep2: 0,
        },
        () => this.generateSteps2()
      );
    }
  };

  handleComparisonModeChange = () => {
    this.setState(
      (prev) => ({ comparisonMode: !prev.comparisonMode }),
      () => {
        if (!this.state.comparisonMode) {
          this.setState({
            array2: [],
            arraySteps2: [],
            colorKey2: [],
            colorSteps2: [],
            currentStep2: 0,
            algorithm2: 0,
          });
        } else {
          this.setState({
            array2: this.state.array1,
            arraySteps2: this.state.arraySteps1,
            colorKey2: this.state.colorKey1,
            colorSteps2: this.state.colorSteps1,
            currentStep2: this.state.currentStep1,
            algorithm2: this.state.algorithm1,
          });
        }
      }
    );
  };

  handleChangeCount = (count) => {
    if (this.state.comparisonMode) this.clearColorKey2();
    this.setState({ barCount: count }, () => {
      this.generateBars();
    });
  };

  handleSpeedChange = (speed) => {
    const speedValues = [500, 400, 300, 200, 100];
    this.setState({ delay: speedValues[speed - 1] || 300 });
  };

  render() {
    const barsDiv1 = this.state.array1.map((value, index) => (
      <Bars
        key={index}
        index={index}
        length={value}
        color={this.state.colorKey1[index]}
        changeArray={this.changeArray}
      />
    ));

    const barsDiv2 = this.state.array2.map((value, index) => (
      <Bars2
        key={index}
        index={index}
        length={value}
        color={this.state.colorKey2[index]}
      />
    ));

    return (
      <div className="sorting w-full min-h-screen bg-[#121419] text-white flex flex-col items-center pt-28">

        <Navbar
          comparisonMode={this.state.comparisonMode}
          handleComparisonModeChange={this.handleComparisonModeChange}
          handleChangeAlgorithm={this.handleChangeAlgorithm}
          handleStart={this.Start}
          handleRandomize={this.generateBars}
          handleReset={this.reset}
        />

        <div className="mt-6">
          <Tooltip algorithm={this.state.algorithm1} />
        </div>

        <div className="flex items-end justify-center bg-[#818181] rounded-2xl p-4 mb-6 shadow-xl">
          {barsDiv1}
        </div>

        <div className="flex space-x-6 items-center text-3xl mb-6">
          <span className="cursor-pointer" onClick={this.previousStep1}>
            ⏮
          </span>
          <span className="cursor-pointer" onClick={this.nextStep1}>
            ⏭
          </span>
        </div>

        {this.state.comparisonMode && (
          <>
            <div className="mt-2">
              <Tooltip algorithm={this.state.algorithm2} />
            </div>

            <div className="flex items-end justify-center bg-[#818181] rounded-2xl p-4 mt-6 shadow-xl">
              {barsDiv2}
            </div>

            <div className="flex space-x-6 items-center text-3xl my-6">
              <span className="cursor-pointer" onClick={this.previousStep2}>
                ⏮
              </span>
              <span className="cursor-pointer" onClick={this.nextStep2}>
                ⏭
              </span>
            </div>
          </>
        )}

        <ControlPannel
          handleChangeCount={this.handleChangeCount}
          handleSpeedChange={this.handleSpeedChange}
        />
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
