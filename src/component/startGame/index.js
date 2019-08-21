import React,{Component} from "react";

class StartGame extends Component {
    
    onChange=(event)=>{
      this.props.setName(event.target.value)
  
    }
  render() {
    return (
      <>
        <h1>Start Game</h1>
        <form>
        <input type="text" onChange={this.onChange} placeholder="Player Name" value={this.props.name}  />

        <button type="submit" onClick={()=>{ this.props.status(0)}}>Start</button>
        </form>
      </>
    );
  }
}
export default StartGame;
