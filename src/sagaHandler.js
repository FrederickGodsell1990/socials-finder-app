import { watcherSagaFunction } from './spotifySaga';
import { all } from '@redux-saga/core/effects';

export default function* rootSaga() {
    yield all([
        watcherSagaFunction(),
  
    ])
  }