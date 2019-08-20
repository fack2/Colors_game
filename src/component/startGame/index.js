import React,{Component} from "react";

class StartGame extends Component {
    state={
        name:""
    }
  render() {
    return (
      <>
        <h1>Start Game</h1>

        <input type="text" placeholder="Player Name" value={this.state.name}  />
        <button />
      </>
    );
  }
}
export default StartGame;
