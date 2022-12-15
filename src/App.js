import SearchComponent from "./components/SearchComponent";
import { useState } from "react";

function App() {
  const getQuery = async ({query})=>{
    console.log(query);
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
