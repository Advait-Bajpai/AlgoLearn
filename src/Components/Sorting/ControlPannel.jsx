import React from "react";
import Slider from './Slider';

export default function ControlPannel({ handleChangeCount, handleSpeedChange }) {
  return (
    <div className="w-full bg-slate-900/60 backdrop-blur-lg p-4 flex justify-center space-x-6 rounded-lg mt-20">
      <Slider handleChange={handleChangeCount} type="Count" />
      <Slider handleChange={handleSpeedChange} type="Speed" />
    </div>
  );
}
