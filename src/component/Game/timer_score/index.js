import React, { Component } from "react";

class Timer_score extends Component {
  componentDidUpdate(e, ee) {
    if (e.score !== this.props.score) {
      this.props.resetTime(10);
    }
  }
  componentDidMount() {
    this.a = setInterval(() => {
      this.props.resetTime(this.props.getTime() - 1);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.a);
  }

  render() {
    return (
      <div>
        <p>time:{this.props.getTime()}</p>
        <p>score:{this.props.score}</p>
      </div>
    );
  }
}

export default Timer_score;
