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
            <input type="text" value ={searchTerm} onChange={(e)=> setSearchData(e)}></input>
            <div className="dataResult">
                {displayData.map(element => {
                    return <div>
                        <div>Game: {element.name}</div>
                        <div>Platform: {element.platform}</div>
                        <div>Game Rank: {element.game_rank}</div>
                        <div>Release Year: {element.year}</div>
                        <div>Genre: {element.genre}</div>
                        <div>Publisher: {element.publisher}</div>
                    </div>
            })}
            </div>
        </div>
    );
}
 
export default SearchGameDetails;