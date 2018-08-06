import { all } from "redux-saga/effects";
import GitSaga from './gitsaga'

const rootSaga = function*() {
  yield all([
    GitSaga(),
  ]);
};

export default rootSaga;
