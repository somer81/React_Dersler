import { useState } from "react";

function Searchbar(props){
         
  const [name,SetName] = useState(""); 
  const [price,SetPrice] = useState(0); 
  const [type,SetType] = useState(""); 
  const [brand,SetBrand] = useState("");
  const [weight,SetWeight] = useState(0); 

  const searchBarPressed = ()=>{
    props.callback({name:name,price:price,type:type,brand:brand,weight:weight});
    //console.log({name})
    //console.log({weight}) 
  }

    return(
        <div>
            <form> 
                <label htmlFor="">Name of Product</label>
                <input 
                id="name-field" 
                type="text"
                value={name}
                onChange = {(e) => SetName(e.target.value)}
                 /> 
                <br></br>
                <label htmlFor=""> Price</label>
                <input 
                id="price-field" 
                type="number"
                value={price}
                onChange = {(e) => SetPrice(e.target.value)}/>
                <br></br>
                <label htmlFor="">Type</label>
                <input 
                id="type-field" 
                type="text"
                value={type}
                onChange = {(e) => SetType(e.target.value)}/>
                <br></br>
                <label htmlFor="">Brand</label>
                <input 
                id="brand-field" 
                type="text"
                value={brand}
                onChange = {(e) => SetBrand(e.target.value)}/>
                <br></br>
                <label htmlFor="">Weight</label>
                <input 
                id="weight-field"
                type="number"
                value={weight}
                onChange={(e)=> SetWeight(e.target.value)}
                ></input>
                <br></br>
                <button type="button" onClick={searchBarPressed}> Submit </button>

            </form>
        </div>
    );
}


export default Searchbar; 