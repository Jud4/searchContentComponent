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
        <form className="d-flex" onSubmit={onSubmit}>
            <input
                type="search"
                className="form-control me-1.5"
                placeholder="Search Album"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success m-1.5" type="submit">
                Search
            </button>
        </form>
    )
};

export default SearchComponent;