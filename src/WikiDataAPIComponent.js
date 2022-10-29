import axios from "axios";
import { useState, useEffect } from "react";
import SetSocialStatesComponent from "./SetSocialStatesComponent";

function WikiDataAPICallFunction({ SpotID }) {
  const [wikiDataArtistQCode, setWikiDataArtistQCode] = useState("");

  wikiDataAPICallAsyncFunction(SpotID);

  useEffect(() =>{
    console.log(wikiDataArtistQCode)
  },[wikiDataArtistQCode])


  async function wikiDataAPICallAsyncFunction(SpotID) {
    try {
      // retrieves Q code (page identifier) from wikidata API via only the spotify artist ID

      var wikiDataArtistQueryData = await axios.get(
        `https://www.wikidata.org/w/api.php?action=query&format=json&list=search&srsearch=haswbstatement:P1902=${SpotID}`
      );

      var extractedQCodeFinal =
        wikiDataArtistQueryData.data.query.search[0].title;
      // sets the local state (of MakeSpotifyAPICall) with the wiki data page ID
      setWikiDataArtistQCode(extractedQCodeFinal);
      // if statemet to only call the wikiData API is the artist's Q code can be determined by spotify ID
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {SpotID ? (
        <div>SpotID works - it's {SpotID} </div>
      ) : (
        <div>No SpotID </div>
      )}
      <div>
        {wikiDataArtistQCode != "" ?  (
          <SetSocialStatesComponent QCode={wikiDataArtistQCode} />
        ) : (
          <div>No WikiData file</div>
        )}
       
      
      </div>
    </>
  );
}

export default WikiDataAPICallFunction;
