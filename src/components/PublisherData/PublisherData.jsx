import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import DisplayPlatformStats from "../DisplayPlatformStats/DisplayPlatformStats";

const PublisherData = ({videoGames}) => {
    
    // Which publisher realeased the most games
    // from 2013 to present day 
    
    const [searchGame, setSearchGame] = useState("")
    
    function displayPublisherData(){
    
        let filteredPublishers = videoGames.filter(publisher => publisher.year >= 2013)


        return(
        <div>
            <h1>Publisher Sales Across All Platforms</h1>>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
        );
    }
}
 
export default PublisherData;