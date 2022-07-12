import {useEffect, useState} from "react";
import axios from 'axios';
// import DisplayPlatformStats from './components/DisplayPlatformStats/DisplayPlatformStats'
// import SearchGameDetails from "./components/SearchGameDetails/SearchGameDetails";
import PublisherData from "./components/PublisherData/PublisherData";

function App() {

  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames(){
    try{
      const response = await axios.get('http://localhost:8080/all');
      setVideoGames(response.data);
    } catch(ex){
      console.log(`ERROR in getVideoGames EXCEPTION: ${ex}`)
    }
  }

  return (
    <div>
      {/* <DisplayPlatformStats videoGames={videoGames}/>
      <SearchGameDetails data={videoGames} /> */}
      <PublisherData videoGames={videoGames} />
    </div>
  );

}

export default App;