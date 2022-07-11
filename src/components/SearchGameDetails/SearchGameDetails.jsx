import { useEffect, useState } from "react";


const SearchGameDetails = (placeholder, data) => {
    return (
        <div className="search">
            <div className="searchInputs" >
            <input type="text" placeholder="Search For Game" />
            <div className="searchIcon"> </div>
            <button>Search</button>
            </div>
            <div className="dataResult"></div>
        </div>
    );
}
 
export default SearchGameDetails;