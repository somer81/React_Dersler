import { useState } from "react";

function Searchbar(props){
         
  const [name,SetName] = useState(""); 
  const [price,SetPrice] = useState(0); 
  const [type,SetType] = useState(""); 
  const [brand,SetBrand] = useState(""); 

  const searchBarPressed = ()=>{
    props.callback({name:name,price:price,type:type,brand:brand});
   //  console.log({name}) 
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
                <label htmlFor="">Max Price</label>
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
                <button type="button" onClick={searchBarPressed}> Submit </button>

            </form>
        </div>
    );
}


export default Searchbar; 