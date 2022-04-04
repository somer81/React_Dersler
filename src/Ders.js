
import React from "react";

class Ders extends React.Component{
   
    constructor(props){
      super();
    }
    render(){
        const ders = this.props.ders;
    if(ders){
    return(
      <div> <h2>javaScript</h2></div>
    );
    }
    else 
    {
      return(
        <div> <h2> Ders Yok!</h2></div>
      );
    }
    }
}

export default Ders;
  