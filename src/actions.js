export function dispatchArtistsName(artistNameFromOnChange) {
  return { type: "DISPATCH_ARTIST_NAME", artistName: artistNameFromOnChange };
}

export function dispatchTokenFromTokenManagement(token) {
  return { type: "DISPATCH_TOKEN_TO_STORE", token: token };

}