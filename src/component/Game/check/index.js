import React, { Component } from "react";

class check extends Component {
  componentDidMount() {
    this.b = setInterval(() => {
      if (this.props.time() < 0) this.props.status(1);
    }, 1000);
  }
  tic = event => {
    const { name } = event.target;
    if (
      (name === "true" && this.props.colorName === this.props.text) ||
      (name === "false" && this.props.colorName !== this.props.text)
    ) {
      this.props.incScore();
    } else {
      this.props.status(1);
    }
  };
  componentWillUnmount() {
    clearInterval(this.b);
  }

  render() {
    return (
      <div>
        <button name="true" onClick={this.tic}>
          ✔
        </button>
        <button name="false" onClick={this.tic}>
          ✖
        </button>
      </div>

    );
  }
}

export default check;
