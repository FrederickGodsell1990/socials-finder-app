export const initialState = {
  actionedArtistsName : ''
};

function artistReducer(state = initialState, action) {
    switch (action.type) {
      case "DISPATCH_ARTIST_NAME":
        return { ...state, actionedArtistsName: action.artistName };
      default:
        return state;
    }
  }

export default artistReducer;