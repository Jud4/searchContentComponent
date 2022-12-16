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
        <div className="input-group justify-content-end">
            <form className="form-outline d-flex" onSubmit={onSubmit}>
                <div>
                    <input
                            type="search"
                            className="form-control me-2 mb-2 mt-2"
                            placeholder="Search Album"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                </div>
                <button className="btn btn-outline-primary mb-2 mt-2" type="submit">
                    Search
                </button>
            </form>
        </div>

      </div>
    )
};

export default SearchComponent;