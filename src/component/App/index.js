import React, { Component } from "react";
import Game from "../Game";
import StartGame from "../startGame";
import GameOver from "../GameOver";

class App extends Component {
  state = {
    name:"",
    status: -1,
    score: 0
  };
  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };
  incScore = () => {
    this.setState(() => {
      return { score: this.state.score + 1 };
    });
  };
resetScore=()=>{
  this.setState({score:0})
}
setName=(name)=>{
  this.setState({"name": name})

}

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
          <StartGame name={this.state.name} setName={this.setName} status={this.setStatus} />
        ) : (
         <GameOver name={this.state.name} status={this.setStatus} score={this.state.score} resetScore={this.resetScore}/>
        )}
      </>
    );
  }
}

export default App;
