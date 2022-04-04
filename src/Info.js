
import React from "react";

class Info extends React.Component{
   
    constructor(props){
      super(props);
      this.state = {
        counter : 0
      }
    }

    updateCounter = ()=>{
      this.setState({
        counter : this.state.counter + 1
      })
    }
    render(){
      
    return(
      <div> 
        <p>Info Counter : {this.state.counter}</p>
        <button onClick={()=>this.updateCounter()}> Info Counter Up </button>
      </div>
    );
 
    }
}

export default Info;
  