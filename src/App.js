import "./App.css";
import { useState } from 'react';
import Searchbar from "./searchBar.js"; // Searchbar eklenecek
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {

   const [filters,setFilters] = useState({});  // Search state
   const [data,setData] = useState({items : []})  // Urunleri eklemek icin 

   const updateFilters = (searchParams) => {
       setFilters(searchParams); 
   };

   const addItemToData = (item) => {
     let items = data["items"]; 
     item.id = items.length + 1;  // urun id si tanimlanir
     items.push(item);   // yeni urunu listeye ekler (state)
     setData({items: items});  // state guncel hali atanir 
     console.log(data);  
   }

  return(
    <div className="App">
        <Searchbar updateSearchParams={updateFilters} />
        <ItemsDisplay items={data["items"]} />  {/* Burada tum urunlar gonderilir */}
        <AddItem addItem={addItemToData} />
      
        {/* <p>Name : {"name" in data ? data["name"] : "Empty"}</p>
        <p>Price : {"price" in data ? data["price"] : "Empty"}</p>
        <p>Type : {"type" in data ? data["type"] : "Empty"}</p>
        <p>Brand : {"brand" in data ? data["brand"] : "Empty"}</p>
        <p>Weight : {"weight" in data ? data["weight"] : "Empty"}</p> */}
  </div>
  );

}

export default App;




