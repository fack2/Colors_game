import React,{Component} from 'react';



class GameOver extends Component{
    
over =(event)=>{
if (event.target.name== "repet"){
  this.props.resetScore()
    this.props.status(0)
}
else 
this.props.status(-1)
}

render(){
    
    return (
        
<div>
 <h1>GameOver</h1>
 <h2>Thank you for playing {this.props.name}</h2>
 <button name="repet" onClick={this.over}>Repet</button>
 <button name="playAgain"onClick={this.over}>Play Again</button>
</div>

    


)
    }}



 export default GameOver;