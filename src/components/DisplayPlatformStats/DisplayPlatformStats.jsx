import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


const DisplayPlatformStats = ({videoGames}) => {

    function generateDataFormChart(){

        //console.log(videoGames);

        let filteredGames = videoGames.filter(game => game.year >= 2013);

        //console.log('Filtered Games', filteredGames)


        let platforms = filteredGames.map(game => {
            return game.platform
        });

        //console.log('Platforms', platforms)

        // uniq = [...new Set(array)];

        let distinctPlatforms = [...new Set(platforms)]

        //console.log('Distinct Platforms', distinctPlatforms)

        // ["PS3", 10, "silver"]

        let platformArrays = distinctPlatforms.map(platform => {

            let gameByPlatform = filteredGames.filter(game => game.platform == platform)
            //console.log(gameByPlatform)
            
            var individualPlatformSales = 0;

            for(var i=0; i < gameByPlatform.length; i++){
                individualPlatformSales += parseInt(gameByPlatform[i].globalsales);
            }
            console.log(platform, individualPlatformSales)
            // then loop through globalSales and sum each games global sales
            // once sum is obtained then pass it into platformArrays

            return [platform, individualPlatformSales, "silver"]

        });

        //console.log("Platform Arrays", platformArrays)


        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays
        ];
    
        //console.log("data", data)

        // ["PS3", 8.94, "silver"],
        // ["Silver", 10.49, "silver"], 
        // ["Gold", 19.3, "silver"],
        // ["Platinum", 21.45, "silver"],
 
        return data;
    }

    return (
        <div>
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>
    );
}

export default DisplayPlatformStats;