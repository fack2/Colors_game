import React, { Component } from "react";

class Timer_score extends Component {
  componentDidUpdate(e) {
    if (e.score !== this.props.score) {
      this.props.resetTime(10);
    }
    if (this.props.score > 0 && this.props.score % 10 === 0) {
      clearInterval(this.a);
      this.a = setInterval(() => {
        this.props.resetTime(this.props.getTime() - 1);
      }, 1000 / (this.props.score / 3 + 1));
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
