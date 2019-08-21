import React, { Component } from "react";
import Game from "../Game";
import StartGame from "../startGame";

class App extends Component {
  state = {
    status: -1,
    score: 0
  };
  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };
  incScore = () => {
    this.setState(({ score }) => {
      return { score: this.state.score + 1 };
    });
  };
  render() {
    return (
      <>
        {this.state.status === 0 ? (
          <Game
            status={this.setStatus}
            incScore={this.incScore}
            score={this.state.score}
          />
        ) : this.state.status === -1 ? (
          <StartGame status={this.setStatus} />
        ) : (
          <p>gameOver</p>
        )}
      </>
    );
  }
}

export default App;
