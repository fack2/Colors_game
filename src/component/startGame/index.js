import React,{Component} from "react";

class StartGame extends Component {
    state={
        name:""
    }
    onChange=(event)=>{
      this.setState({name:event.target.value})
    }
  render() {
    return (
      <>
        <h1>Start Game</h1>
        <input type="text" onChange={this.onChange} placeholder="Player Name" value={this.state.name}  />
        <button onClick={()=>{ this.props.status(0)}}>Start</button>
      </>
    );
  }
}
export default StartGame;
