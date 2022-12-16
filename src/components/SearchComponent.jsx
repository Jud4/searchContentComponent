import { useState } from "react";

const SearchComponent = ({ onGetQuery }) => {
    //set Hook state
    const [query, setQuery] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        // Send Query to the principal Component
        onGetQuery({query});
        // Reset the search bar's text
        setQuery("");
    };


    return (
      <div className="container">
        <div class="input-group justify-content-end">
                <div class="form-outline">
                    <input
                            type="search"
                            className="form-control me-2 mb-2 mt-2"
                            placeholder="Search Album"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                </div>
                <button className="btn btn-outline-primary mb-2 mt-2" type="submit" onClick={onSubmit}>
                    Search
                </button>
        </div>

      </div>
    )
};

export default SearchComponent;