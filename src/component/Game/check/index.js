import React,{Component} from 'react';


class check extends Component{
    state={
        // time:10,
        // score:0


    }
    componentDidMount(){
        // this.a=setInterval((p)=>{
        //     this.setState({time:this.state.time-1})
        // },1000)
        
    }
    tic = (event)=>{
        const {name}=event.target;
        console.log(name,"0000");
        console.log(this .state,"00011");
        
    }

render(){
    
    return (
        // <>
<div>
    <button name="true"  onClick={this.tic}></button>
    <button name="false" onClick={this.tic}></button>

</div>

    

// </>
)
    }}



 export default check;