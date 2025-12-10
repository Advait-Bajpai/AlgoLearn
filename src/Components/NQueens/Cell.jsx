import React, { Component } from 'react';
import './style.css';
import queen from './queen.png';

class Cell extends Component {
  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.cell.isPresent && (
          <img
            src={queen}
            alt="queen"
            height="100px"
            style={{ padding: '25px' }}
          />
        )}
      </div>
    );
  }

  getClassName = () => {
    const base =
      (this.props.cell.row + this.props.cell.col) % 2 === 0 ? 'light' : 'dark';

    if (this.props.cell.isAttacked) return 'boardCell attacked';
    if (this.props.cell.isCurrent) return 'boardCell current';
    if (this.props.cell.isPresent) return 'boardCell present';
    if (this.props.cell.isChecked) return 'boardCell checked';

    // normal cell → boardCell + light/dark
    return `boardCell ${base}`;
  };
}

export default Cell;
