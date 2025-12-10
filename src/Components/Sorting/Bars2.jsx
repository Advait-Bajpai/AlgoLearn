import "./Bar.css";

export default function Bars2({ length, color }) {
  const colors = ["#40514e", "#2f89fc", "#30e3ca", "#ff304f"];

  const barStyle = {
    background: colors[color],
    height: `${length}px`,
    marginTop: `${200 - length}px`,
  };

  const textStyle = {
    position: "relative",
    top: `${Math.floor(length / 2) - 10}px`,
    width: `${length}px`,
    left: `${-Math.floor(length / 2) + 11}px`,
    background: "transparent",
    border: "none",
    pointerEvents: "none",
  };

  return (
    <div className="bar" style={barStyle}>
      <input type="number" style={textStyle} value={length} className="text" disabled />
    </div>
  );
}
