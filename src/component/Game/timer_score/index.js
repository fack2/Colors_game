import React,{Component} from 'react';


class Timer_score extends Component{
    state={
        time:10,
        score:0

    }
    componentDidMount(){
        this.a=setInterval((p)=>{
            this.setState({time:this.state.time-1})
        },1000)
        
    }

render(){
    
    return (
        // <>
<div>
<p>time:{this.state.time}</p> 
<p>score:{this.state.score}</p> 
</div>

    

// </>
)
    }}



 export default Timer_score;