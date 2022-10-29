import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import NoWikiDataFile from "./noWikiDataFileComponent";
import SetSocialStatesComponent from "./SetSocialStatesComponent";
import WikiDataAPICallFunction from "./WikiDataAPIComponent";

function MakeSpotifyAPICall() {
  // pulls access token for Spotify API call from store into the function
  const accessTokenFromStore = useSelector((state) => state.tokenReducer.token);

  // pulls the search data inputted via the app from store into the function
  const accessArtistsNameFromStore = useSelector(
    (state) => state.artistReducer.actionedArtistsName
  );

  const [spotifyID, setSpotifyID] = useState("");
  const [artistNameFormal, setArtistNameFormal] = useState("");
  const [artistImage, setArtistImage] = useState("");


  // nested function that makes the API call
  async function spotifyAPICall() {
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${accessTokenFromStore}`,
        },
        params: {
          q: accessArtistsNameFromStore,
          type: "artist",
        },
      });

      // var not const as var has global scope
      var justArtistData = await data.artists.items[0].id;

      var spotifyArtistsImage = data.artists.items?.[0]?.images?.[2].url
      var spotifyArtistsNameFormal = data.artists.items?.[0].name
      setArtistNameFormal(spotifyArtistsNameFormal)
      setArtistImage(spotifyArtistsImage)
      console.log(spotifyArtistsImage)

      setSpotifyID(justArtistData);
    } catch (error) {
      console.log(error);
    }

  
  }

  if (accessArtistsNameFromStore) {
    spotifyAPICall();
  }

  return !spotifyID ? (
    <div> Please enter artists's name </div>
  ) : (
    <div>
      Artist's Spotify ID is {spotifyID} <br></br>
      Artist's name is {artistNameFormal}<br></br>
      <img src={artistImage} />
      <div>
        <WikiDataAPICallFunction SpotID={spotifyID} />
      </div>
    </div>
  );
}

export default MakeSpotifyAPICall;
