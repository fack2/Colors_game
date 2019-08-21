import React, { Component } from "react";
import colors from "../../data";
import Timer from "../Game/timer_score";
import Check from "../Game/check";
import Color from "../Game/color";

class Game extends Component {
  state = {
    time: 10,
    colorNo: ((Math.random() * 10) % 4).toString().slice(0, 1),
    textNo: ((Math.random() * 10) % 4).toString().slice(0, 1)
  };
  resetTime = newTime => {
    if (newTime === 10)
      this.setState({
        colorNo: ((Math.random() * 10) % 4).toString().slice(0, 1),
        textNo: ((Math.random() * 10) % 4).toString().slice(0, 1)
      });
    this.setState({ time: newTime });
  };
  getTime = () => {
    return this.state.time;
  };
  render() {
    return (
      <>
        <Timer
          score={this.props.score}
          resetTime={this.resetTime}
          getTime={this.getTime}
        />
        <Color
          colorName={colors[this.state.colorNo]}
          text={colors[this.state.textNo]}
        />
        <Check
          colorName={colors[this.state.colorNo]}
          text={colors[this.state.textNo]}
          incScore={this.props.incScore}
          status={this.props.status}
          time={this.getTime}
        />
      </>
    );
  }
}

export default Game;
