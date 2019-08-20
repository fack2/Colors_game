import React, { Component } from "react";
import Game from "../Game";
import StartGame from "../startGame";

class App extends Component {
    state={
        status:-1
    }
    setStatus=(newStatus)=>{
        this.setState({status:newStatus})
    }
  render() {
    return (
      <>
      {/* { if (this.state.status===0)
      <Game a={this.state.a} />
      else if
    } */}
      {this.state.status===0?<Game status={this.setStatus} />:
     ( this.state.status===-1?<StartGame/>:<p>gameOver</p>)}
        {/* <Game /> */}
      </>
    );
  }
}

export default App;
