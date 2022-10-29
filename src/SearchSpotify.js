import { useState } from "react";
import MakeSpotifyAPICall from './makeSpotifyAPICall'; 
import { dispatchArtistsName } from './actions';
import { useDispatch } from "react-redux";

function SearchSpotify() {
  const dispatch = useDispatch();
  const [artistsName, setArtistsName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let searchBarVar = e.target[0].value;

    setArtistsName(searchBarVar);
    // below dispatches inputted artists' names to the reducer
    dispatch(dispatchArtistsName(searchBarVar))
    
  };


  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} >
        <input />
        <button type={"submit"}>Search artist</button>
      
      </form>
      <MakeSpotifyAPICall />
    </>
  );
}

export default SearchSpotify;
