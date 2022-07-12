import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


const PublisherData = ({videoGames}) => {

    // Which publisher realeased the most games
    // from 2013 to present day 
    
    function displayPublisherData(){

        let publisherSales = videoGames.filter(game => game.year >= 2013)

        console.log(publisherSales)

        let publishers = publisherSales.map(game => game.publisher)

        

        const data = [
            ["Publishers", "Sales", { role: "style" }],
        
        ];
        return data;
    }
    return (
        <div>
            <h1>Global Publisher Sales Across All Platforms</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={displayPublisherData()} />
        </div>
    );
}
 
export default PublisherData;