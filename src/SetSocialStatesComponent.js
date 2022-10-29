import axios from "axios";
import { useState,useEffect } from "react";
import {
  InstagramComponent,
  SoundcloudComponent,
  TwitterComponent,
  YoutubeComponent,
} from "./SocialComponent";

function SetSocialStatesComponent({ QCode }) {
  const [twitterURL, setTwitterURL] = useState("");
  const [instagramURL, setinstagramURL] = useState("");
  const [soundCloudURL, setsoundCloudURL] = useState("");
  const [youTubeURL, setYouTubeURL] = useState("");

  useEffect(() =>{
    console.log(QCode)
  },[QCode])

  
  SetSocialStatesAsyncFunction(QCode);

  async function SetSocialStatesAsyncFunction(QCode) {
    // returns a wiki data json object from the wiki data API
    const wikiDataAPICall = await axios.get(
      `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${QCode}&format=json`
    );

    const wikiDataTwitterInfoIntoObject = wikiDataAPICall.data;

    const { entities } = await wikiDataTwitterInfoIntoObject;

    const twitterUserName =
      entities[QCode].claims.P2002?.[0].mainsnak.datavalue.value;

    const youtubeChannelID =
      entities[QCode].claims.P2397?.[0].mainsnak.datavalue.value;

    const InstagramUsername =
      entities[QCode].claims.P2003?.[0].mainsnak.datavalue.value;

    const soundCloudID =
      entities[QCode].claims.P3040?.[0].mainsnak.datavalue.value;

    
    if (entities) {
      setTwitterURL(twitterUserName);
      setYouTubeURL(youtubeChannelID);
      setinstagramURL(InstagramUsername);
      setsoundCloudURL(soundCloudID);
    }
  }

  return (
    <>
      <div>
        {twitterURL == undefined ? (
          <div> No Twitter profile </div>
        ) : (
          <TwitterComponent TwitURL={`https://twitter.com/${twitterURL}`} />
        )}
      </div>
      <div>
        {instagramURL == undefined ? (
          <div> No Instgram profile </div>
        ) : (
          <InstagramComponent
            instaURL={`https://www.instagram.com/${instagramURL}`}
          />
        )}
      </div>
      <div>
        {youTubeURL &&
         
          <YoutubeComponent
            TubeURL={`https://www.youtube.com/channel/${youTubeURL}`}
          />
        }
      </div>
  
      
      <div>
        {soundCloudURL &&
          <SoundcloudComponent
            CloudURL={`https://soundcloud.com/${soundCloudURL}`}
          />
        }
      </div>
    </>
  );
}
// variation above on if the social icon should display if the value is undefined
export default SetSocialStatesComponent;
