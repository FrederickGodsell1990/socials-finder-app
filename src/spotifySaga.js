import { takeEvery } from "@redux-saga/core/effects";
// import axios from "axios";
// import { store } from "./store.js";



export function* watcherSagaFunction(){
    yield takeEvery("DISPATCH_ARTIST_NAME", workerSagaFunction);
}

export function* workerSagaFunction(){
    console.log('we working')
}