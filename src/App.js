import "./App.css";
import { useState } from 'react';
import Searchbar from "./searchBar.js";

 function App() {

   const [data,setData] = useState({}); 

   const updateData = (searchParams) => {
       setData(searchParams); 
   };

  return(
    <div>
        <Searchbar callback={updateData} />
        <p>Name : {"name" in data ? data["name"] : "Empty"}</p>
        <p>Price : {"price" in data ? data["price"] : "Empty"}</p>
        <p>Type : {"type" in data ? data["type"] : "Empty"}</p>
        <p>Brand : {"brand" in data ? data["brand"] : "Empty"}</p>
  </div>
  );

}

export default App;




