import SearchComponent from "./components/SearchComponent";
import { useState } from "react";

function App() {
  const getQuery = async ({query})=>{
    // Pre-processing query for API
    query = query.replace(/ /g,'+');
    const url = `https://itunes.apple.com/search?term=${query}&media=music&attribute=artistTerm&entity=album&limit=30`;
    
    //Request the API
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="App">
      <SearchComponent
        onGetQuery={getQuery}
      />
    </div>
  );
}

export default App;
