import { useEffect, useState } from "react";
import DisplayPlatformStats from "../DisplayPlatformStats/DisplayPlatformStats";

const SearchGameDetails = (props) => {

    const [searchTerm, setSearchTerm] =useState("")
    const [displayData, setDisplayData] =useState([])
    

    const setSearchData = (e) =>{
        setSearchTerm(e.target.value)
        let results = props.data.filter((el) =>{
            if(el.name.includes(e.target.value)){
                return true;
            }
        })
      
        setDisplayData(results)


    }

    return (
        <div className="search">
    
            <div className="searchIcon"> </div>
            
            <input type="text" value ={searchTerm} onChange={(e)=> setSearchData(e)}></input>
            <div className="dataResult">
                {displayData.map(element => {
                    return <div>
                        <div>{element.name}</div>
                        <div>{element.platform}</div>
                    </div>
            })}
            </div>
        </div>
    );
}
 
export default SearchGameDetails;