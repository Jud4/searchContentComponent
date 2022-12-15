import SearchComponent from "./components/SearchComponent";
import { useState } from "react";
import CardContainer from "./components/CardContainer";

function App() {
  const [albums, setAlbums] = useState([]);

  //Get Text query from the SearchComponent
  const getQuery = async ({query})=>{
    if (!query) {
      alert("Please type a music author to search");
      return;
    } 
    // Pre-processing query for API
    query = query.replace(/ /g,'+');
    const url = `https://itunes.apple.com/search?term=${query}&media=music&attribute=artistTerm&entity=album&limit=30`;
    
    try{
    //Request the API
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    
    // Cleaning Album's data
    const cleanedResults = results.map(album => {
      const container = {
        imageCover: album.artworkUrl100,
        albumName: album.collectionName,
        artistName: album.artistName,
        price: album.collectionPrice+' '+album.currency
      };
      return container;
    })

    // Updating Albums
    setAlbums(cleanedResults);
    console.log(albums);
    }catch(e){
      console.log(e)
    }
  }
  const showAlbums = () => {
    if (albums.length === 0) {
      return (
        <div className="alert alert-warning m-5" role="alert">
          Not founded albums
        </div>
      );
    }
    return (
      <div>
        <CardContainer 
          albumsList={albums}
        />
      </div>
    );
  };
  return (
    <div className="App">
      <SearchComponent
        onGetQuery={getQuery}
      />
      {showAlbums()}
    </div>
  );
}

export default App;
