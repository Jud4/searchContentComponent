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
        <div class="input-group">
            <div class="form-outline">
                <input
                        type="search"
                        className="form-control"
                        placeholder="Search Album"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
            </div>
            <button className="btn btn-outline-primary" type="submit" onClick={onSubmit}>
                Search
            </button>
      </div>
    )
};

export default SearchComponent;