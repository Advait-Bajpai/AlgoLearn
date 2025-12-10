import React, { Component } from "react";
import { Link } from "react-router-dom";
import DiscreteSlider from "./slider";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Back Button + Title */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white text-xl font-bold hover:text-teal-300 transition">
              ◀
            </Link>

            <h2 className="text-xl text-white font-semibold tracking-wide">
              N Queens <span className="text-teal-400 font-bold">Visualizer</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-6 text-white">
            
            <button
              onClick={this.props.onClear}
              disabled={this.props.disable}
              style={this.isClickable()}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                this.props.disable
                  ? "bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              Clear Board
            </button>

            <DiscreteSlider
              default={4}
              min={1}
              max={8}
              step={1}
              title="Grid size"
              onCountChange={this.props.onCountChange}
              disable={this.props.disable}
            />

            <DiscreteSlider
              default={50}
              min={1}
              max={100}
              step={1}
              title="Speed"
              onCountChange={this.props.onSpeedChange}
            />

            <button
              onClick={this.props.onViusalize}
              disabled={this.props.disable}
              style={this.isClickable()}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                this.props.disable
                  ? "bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-teal-500 hover:bg-teal-600"
              }`}
            >
              Visualize
            </button>

          </div>
        </div>
      </nav>
    );
  }

  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default Navbar;
