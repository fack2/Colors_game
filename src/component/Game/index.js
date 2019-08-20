import React,{Component} from 'react'
import colors from "../../data";
import Timer from "../Game/timer_score"
import Check from "../Game/check"
import Color from "../Game/color"


class Game extends Component{
    state={
        // time:10,
        // score:0

        

    }
    componentDidMount(){
        // console.log(this.props.status(-1),"99999999999")
        // this.props
        // this.a=setInterval((p)=>{
        //     this.setState({time:this.state.time-1})
        // },1000)
        
    }
    // tic(event){
    //     const {name}=event.target;
    //     console.log(name,"0000");
        
    // }

render(){
    
    return (
        // <>
        <>
        <Timer/>
        <Color colorName= {colors[1]} text={colors[0]}/>
        <Check/>

        
        </>

    

// </>
)
    }}





export default Game;