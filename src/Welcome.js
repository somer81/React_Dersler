import React from "react";



class Welcome extends React.Component{
     constructor(props){
       super();
     }
      // myo1 = this.props.title;
    render(){
       
        //const myo = "VKMYO Hosgeldin"; 
        const durum = true; 
        if(durum){
            return <h1>Selam  {this.props.title} </h1>;
        }
        else 
        {
            return <h1>Selam  {this.props.title}</h1>;
        }
         
    }
}

Welcome.defaultProps = {
    title : "OMU - OMU",
}

// function Welcome(props) {
//     const deger = "Hosgeldin"; 
//     return <h1>Selam, {props.name} - {deger}</h1>;
//   }
  export default Welcome;