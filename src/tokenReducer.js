export const tokenReducerInitialState = {
    token : 'nada'
  };

  function tokenReducer(state = tokenReducerInitialState, action) {
    switch (action.type) {
      case  "DISPATCH_TOKEN_TO_STORE":
        return { ...state, token : action.token };
      default:
        return state;
    }
  }

  export default tokenReducer;
  