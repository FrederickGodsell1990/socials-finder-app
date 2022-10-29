import { useEffect, useState } from "react";
import TokenManagement from './TokenManagement'
import { useDispatch } from "react-redux";
import { dispatchTokenFromTokenManagement } from './actions'


const CLIENT_ID = "8007333180b14bb086dd807b02d407ee";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const MULTIPLE_SCOPES = [
  "user-follow-modify",
  "user-follow-read",
  "user-top-read",
];

const SCOPES_JOINED = MULTIPLE_SCOPES.join(" ");

function LogInToSpotify() {
  let [token, setToken] = useState("");

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const dispatch = useDispatch();

  useEffect( () => {
   const TokenFromTokenManagement = TokenManagement()
    setToken(TokenFromTokenManagement);
    // you can log the access code to the global state here if you need to - as below
    dispatch(dispatchTokenFromTokenManagement(TokenFromTokenManagement))
  
  }, []);



  return (
    <header>
      Artists Social App
      <div>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </header>
  );
}

export default LogInToSpotify;
