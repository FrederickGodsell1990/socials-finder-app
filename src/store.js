import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import artistReducer from "./artistReducer";
import tokenReducer from './tokenReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagaHandler";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const reducer = combineReducers({
  artistReducer : artistReducer,
  tokenReducer : tokenReducer
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
