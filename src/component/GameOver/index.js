import React, { Component } from "react";

class GameOver extends Component {

  over = event => {
    if (event.target.name == "repeat") {
      this.props.status(0);
    } else this.props.status(-1);
  };

  render() {
    return (
      <div>
        <h1 className="headerGameOver">GameOver</h1>
        <h2>Thank you for playing {this.props.name}</h2>
        <h2>Your score is {this.props.score}</h2>
        <button className="gameOver" name="repeat" onClick={this.over}>
          Repeat
        </button>
        <br />
        <button className="gameOver" name="playAgain" onClick={this.over}>
          Play Again
        </button>
      </div>
    );
  }
}

export default GameOver;
